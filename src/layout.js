/**
 * A class to represent the memory layout for a vertex attribute array. Used by
 * {@link Mesh}'s TBD(...) method to generate a packed array from mesh data.
 * <p>
 * Layout can sort of be thought of as a C-style struct declaration.
 * {@link Mesh}'s TBD(...) method will use the {@link Layout} instance to
 * pack an array in the given attribute order.
 * <p>
 * Layout also is very helpful when calling a WebGL context's
 * <code>vertexAttribPointer</code> method. If you've created a buffer using
 * a Layout instance, then the same Layout instance can be used to determine
 * the size, type, normalized, stride, and offset parameters for
 * <code>vertexAttribPointer</code>.
 * <p>
 * For example:
 * <pre><code>
 *
 * const index = glctx.getAttribLocation(shaderProgram, "pos");
 * glctx.vertexAttribPointer(
 *   layout.position.size,
 *   glctx[layout.position.type],
 *   layout.position.normalized,
 *   layout.position.stride,
 *   layout.position.offset);
 * </code></pre>
 * @see {@link Mesh}
 */
export class Layout {
    /**
     * Create a Layout object. This constructor will throw if any duplicate
     * attributes are given.
     * @param {Array} ...attributes - An ordered list of attributes that
     *        describe the desired memory layout for each vertex attribute.
     *        <p>
     *
     * @see {@link Mesh}
     */
    constructor(...attributes) {
        this.attributes = attributes;
        let offset = 0;
        let maxStrideMultiple = 0;
        for (const attribute of attributes) {
            if (this[attribute.key]) {
                throw new DuplicateAttributeException(attribute);
            }
            // Add padding to satisfy WebGL's requirement that all
            // vertexAttribPointer calls have an offset that is a multiple of
            // the type size.
            if (offset % attribute.sizeOfType !== 0) {
                offset += attribute.sizeOfType - offset % attribute.sizeOfType;
                console.warn("Layout requires padding before " + attribute.key + " attribute");
            }
            this[attribute.key] = {
                attribute: attribute,
                size: attribute.size,
                type: attribute.type,
                normalized: attribute.normalized,
                offset: offset
            };
            offset += attribute.sizeInBytes;
            maxStrideMultiple = Math.max(maxStrideMultiple, attribute.sizeOfType);
        }
        // Add padding to the end to satisfy WebGL's requirement that all
        // vertexAttribPointer calls have a stride that is a multiple of the
        // type size. Because we're putting differently sized attributes into
        // the same buffer, it must be padded to a multiple of the largest
        // type size.
        if (offset % maxStrideMultiple !== 0) {
            offset += maxStrideMultiple - offset % maxStrideMultiple;
            console.warn("Layout requires padding at the back");
        }
        this.stride = offset;
        for (const attribute of attributes) {
            this[attribute.key].stride = this.stride;
        }
    }
}

/**
 * An exception for when two or more of the same attributes are found in the
 * same layout.
 * @private
 */
class DuplicateAttributeException {
    /**
     * Create a DuplicateAttributeException
     * @param {Attribute} attribute - The attribute that was found more than
     *        once in the {@link Layout}
     */
    constructor(attribute) {
        this.message = "found duplicate attribute: " + attribute.key;
    }
}

/**
 * Represents how a vertex attribute should be packed into an buffer.
 * @private
 */
class Attribute {
    /**
     * Create an attribute. Do not call this directly, use the predefined
     * constants.
     * @param {string} key - The name of this attribute as if it were a key in
     *        an Object. Use the camel case version of the upper snake case
     *        const name.
     * @param {number} size - The number of components per vertex attribute.
     *        Must be 1, 2, 3, or 4.
     * @param {string} type - The data type of each component for this
     *        attribute. Possible values:<br/>
     *        "BYTE": signed 8-bit integer, with values in [-128, 127]<br/>
     *        "SHORT": signed 16-bit integer, with values in
     *            [-32768, 32767]<br/>
     *        "UNSIGNED_BYTE": unsigned 8-bit integer, with values in
     *            [0, 255]<br/>
     *        "UNSIGNED_SHORT": unsigned 16-bit integer, with values in
     *            [0, 65535]<br/>
     *        "FLOAT": 32-bit floating point number
     * @param {boolean} normalized - Whether integer data values should be
     *        normalized when being casted to a float.<br/>
     *        If true, signed integers are normalized to [-1, 1].<br/>
     *        If true, unsigned integers are normalized to [0, 1].<br/>
     *        For type "FLOAT", this parameter has no effect.
     */
    constructor(key, size, type, normalized = false) {
        this.key = key;
        this.size = size;
        this.type = type;
        this.normalized = false;
        this.sizeOfType = sizeInBytesOfType(type);
        this.sizeInBytes = this.sizeOfType * size;
    }
}

/**
 * @param {string} type - A type accepted by {@link Attribute}.
 * @return The size (in bytes) for a given type.
 * @see {@link Attribute}
 * @private
 */
function sizeInBytesOfType(type) {
    switch (type) {
        case "BYTE":
        case "UNSIGNED_BYTE":
            return 1;
        case "SHORT":
        case "UNSIGNED_SHORT":
            return 2;
        case "FLOAT":
            return 4;
    }
}

// Geometry attributes
/**
 * Attribute layout to pack a vertex's x, y, & z as floats
 *
 * @see {@link Layout}
 */
Layout.POSITION = new Attribute("position", 3, "FLOAT");

/**
 * Attribute layout to pack a vertex's normal's x, y, & z as floats
 *
 * @see {@link Layout}
 */
Layout.NORMAL = new Attribute("normal", 3, "FLOAT");

/**
 * Attribute layout to pack a vertex's normal's x, y, & z as floats.
 * <p>
 * This value will be computed on-the-fly based on the texture coordinates.
 * If no texture coordinates are available, the generated value will default to
 * 0, 0, 0.
 *
 * @see {@link Layout}
 */
Layout.TANGENT = new Attribute("tangent", 3, "FLOAT");

/**
 * Attribute layout to pack a vertex's normal's bitangent x, y, & z as floats.
 * <p>
 * This value will be computed on-the-fly based on the texture coordinates.
 * If no texture coordinates are available, the generated value will default to
 * 0, 0, 0.
 * @see {@link Layout}
 */
Layout.BITANGENT = new Attribute("bitangent", 3, "FLOAT");

/**
 * Attribute layout to pack a vertex's texture coordinates' u & v as floats
 *
 * @see {@link Layout}
 */
Layout.UV = new Attribute("uv", 2, "FLOAT");

// Material attributes

/**
 * Attribute layout to pack an unsigned short to be interpreted as a the index
 * into a {@link Mesh}'s materials list.
 * <p>
 * The intention of this value is to send all of the {@link Mesh}'s materials
 * into multiple shader uniforms and then reference the current one by this
 * vertex attribute.
 * <p>
 * example glsl code:
 *
 * <pre><code>
 *  // this is bound using MATERIAL_INDEX
 *  attribute int materialIndex;
 *
 *  struct Material {
 *    vec3 diffuse;
 *    vec3 specular;
 *    vec3 specularExponent;
 *  };
 *
 *  uniform Material materials[MAX_MATERIALS];
 *
 *  // ...
 *
 *  vec3 diffuse = materials[materialIndex];
 *
 * </code></pre>
 * TODO: More description & test to make sure subscripting by attributes even
 * works for webgl
 *
 * @see {@link Layout}
 */
Layout.MATERIAL_INDEX = new Attribute("materialIndex", 1, "SHORT");
Layout.MATERIAL_ENABLED = new Attribute("materialEnabled", 1, "UNSIGNED_SHORT");
Layout.AMBIENT = new Attribute("ambient", 3, "FLOAT");
Layout.DIFFUSE = new Attribute("diffuse", 3, "FLOAT");
Layout.SPECULAR = new Attribute("specular", 3, "FLOAT");
Layout.SPECULAR_EXPONENT = new Attribute("specularExponent", 3, "FLOAT");
Layout.EMISSIVE = new Attribute("emissive", 3, "FLOAT");
Layout.TRANSMISSION_FILTER = new Attribute("transmissionFilter", 3, "FLOAT");
Layout.DISSOLVE = new Attribute("dissolve", 1, "FLOAT");
Layout.ILLUMINATION = new Attribute("illumination", 1, "UNSIGNED_SHORT");
Layout.REFRACTION_INDEX = new Attribute("refractionIndex", 1, "FLOAT");
Layout.SHARPNESS = new Attribute("sharpness", 1, "FLOAT");
Layout.MAP_DIFFUSE = new Attribute("mapDiffuse", 1, "SHORT");
Layout.MAP_AMBIENT = new Attribute("mapAmbient", 1, "SHORT");
Layout.MAP_SPECULAR = new Attribute("mapSpecular", 1, "SHORT");
Layout.MAP_SPECULAR_EXPONENT = new Attribute("mapSpecularExponent", 1, "SHORT");
Layout.MAP_DISSOLVE = new Attribute("mapDissolve", 1, "SHORT");
Layout.ANTI_ALIASING = new Attribute("antiAliasing", 1, "UNSIGNED_SHORT");
Layout.MAP_BUMP = new Attribute("mapBump", 1, "SHORT");
Layout.MAP_DISPLACEMENT = new Attribute("mapDisplacement", 1, "SHORT");
Layout.MAP_DECAL = new Attribute("mapDecal", 1, "SHORT");
Layout.MAP_EMISSIVE = new Attribute("mapEmissive", 1, "SHORT");
