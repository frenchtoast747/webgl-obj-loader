/**
 * The Material class.
 */
export class Material {
    /**
     * Constructor
     * @param {String} name the unique name of the material
     */
    constructor(name) {
        // the unique material ID.
        this.name = name;
        // The values for the following attibutes
        // are an array of R, G, B normalized values.
        // Ka - Ambient Reflectivity
        this.ambient = [0, 0, 0];
        // Kd - Defuse Reflectivity
        this.diffuse = [0, 0, 0];
        // Ks
        this.specular = [0, 0, 0];
        // Ke
        this.emissive = [0, 0, 0];
        // Tf
        this.transmissionFilter = [0, 0, 0];
        // d
        this.dissolve = 0;
        // valid range is between 0 and 1000
        this.specularExponent = 0;
        // either d or Tr; valid values are normalized
        this.transparency = 0;
        // illum - the enum of the illumination model to use
        this.illumination = 0;
        // Ni - Set to "normal" (air).
        this.refractionIndex = 1;
        // sharpness
        this.sharpness = 0;
        // map_Kd
        this.mapDiffuse = null;
        // map_Ka
        this.mapAmbient = null;
        // map_Ks
        this.mapSpecular = null;
        // map_Ns
        this.mapSpecularExponent = null;
        // map_d
        this.mapDissolve = null;
        // map_aat
        this.antiAliasing = false;
        // map_bump or bump
        this.mapBump = null;
        // disp
        this.mapDisplacement = null;
        // decal
        this.mapDecal = null;
        // map_Ke
        this.mapEmissive = null;
        // refl - when the reflection type is a cube, there will be multiple refl
        //        statements for each side of the cube. If it's a spherical
        //        reflection, there should only ever be one.
        this.mapReflections = [];
    }
}

/**
 * https://en.wikipedia.org/wiki/Wavefront_.obj_file
 * http://paulbourke.net/dataformats/mtl/
 */
export class MaterialLibrary {
    /**
     * Constructs the Material Parser
     * @param {String} mtlData the MTL file contents
     */
    constructor(mtlData) {
        this.data = mtlData;
        this.currentMaterial = null;
        this.materials = {};

        this.parse();
    }

    /* eslint-disable camelcase */
    /* the function names here disobey camelCase conventions
     to make parsing/routing easier. see the parse function
     documentation for more information. */

    /**
     * Creates a new Material object and adds to the registry.
     * @param {string[]} tokens the tokens associated with the directive
     */
    parse_newmtl(tokens) {
        let name = tokens[0];
        // console.info('Parsing new Material:', name);

        this.currentMaterial = new Material(name);
        this.materials[name] = this.currentMaterial;
    }

    /**
     * See the documenation for parse_Ka below for a better understanding.
     *
     * Given a list of possible color tokens, returns an array of R, G, and B
     * color values.
     *
     * @param {string[]} tokens the tokens associated with the directive
     * @return {*} a 3 element array containing the R, G, and B values
     * of the color.
     */
    parseColor(tokens) {
        if (tokens[0] == "spectral") {
            console.error(
                "The MTL parser does not support spectral curve files. You will " +
                    "need to convert the MTL colors to either RGB or CIEXYZ."
            );
            return;
        }

        if (tokens[0] == "xyz") {
            console.warn("TODO: convert XYZ to RGB");
            return;
        }

        // from my understanding of the spec, RGB values at this point
        // will either be 3 floats or exactly 1 float, so that's the check
        // that i'm going to perform here
        if (tokens.length == 3) {
            return tokens.map(parseFloat);
        }

        // Since tokens at this point has a length of 3, we're going to assume
        // it's exactly 1, skipping the check for 2.
        let value = parseFloat(tokens[0]);
        // in this case, all values are equivalent
        return [value, value, value];
    }

    /**
     * Parse the ambient reflectivity
     *
     * A Ka directive can take one of three forms:
     *   - Ka r g b
     *   - Ka spectral file.rfl
     *   - Ka xyz x y z
     * These three forms are mutually exclusive in that only one
     * declaration can exist per material. It is considered a syntax
     * error otherwise.
     *
     * The "Ka" form specifies the ambient reflectivity using RGB values.
     * The "g" and "b" values are optional. If only the "r" value is
     * specified, then the "g" and "b" values are assigned the value of
     * "r". Values are normally in the range 0.0 to 1.0. Values outside
     * of this range increase or decrease the reflectivity accordingly.
     *
     * The "Ka spectral" form specifies the ambient reflectivity using a
     * spectral curve. "file.rfl" is the name of the ".rfl" file containing
     * the curve data. "factor" is an optional argument which is a multiplier
     * for the values in the .rfl file and defaults to 1.0 if not specified.
     *
     * The "Ka xyz" form specifies the ambient reflectivity using CIEXYZ values.
     * "x y z" are the values of the CIEXYZ color space. The "y" and "z" arguments
     * are optional and take on the value of the "x" component if only "x" is
     * specified. The "x y z" values are normally in the range of 0.0 to 1.0 and
     * increase or decrease ambient reflectivity accordingly outside of that
     * range.
     *
     * @param {string[]} tokens the tokens associated with the directive
     */
    parse_Ka(tokens) {
        this.currentMaterial.ambient = this.parseColor(tokens);
    }

    /**
     * Diffuse Reflectivity
     *
     * Similar to the Ka directive. Simply replace "Ka" with "Kd" and the rules
     * are the same
     *
     * @param {string[]} tokens the tokens associated with the directive
     */
    parse_Kd(tokens) {
        this.currentMaterial.diffuse = this.parseColor(tokens);
    }

    /**
     * Spectral Reflectivity
     *
     * Similar to the Ka directive. Simply replace "Ks" with "Kd" and the rules
     * are the same
     *
     * @param {string[]} tokens the tokens associated with the directive
     */
    parse_Ks(tokens) {
        this.currentMaterial.specular = this.parseColor(tokens);
    }

    /**
     * Emissive
     *
     * The amount and color of light emitted by the object.
     *
     * @param {string[]} tokens the tokens associated with the directive
     */
    parse_Ke(tokens) {
        this.currentMaterial.emissive = this.parseColor(tokens);
    }

    /**
     * Transmission Filter
     *
     * Any light passing through the object is filtered by the transmission
     * filter, which only allows specific colors to pass through. For example, Tf
     * 0 1 0 allows all of the green to pass through and filters out all of the
     * red and blue.
     *
     * Similar to the Ka directive. Simply replace "Ks" with "Tf" and the rules
     * are the same
     *
     * @param {string[]} tokens the tokens associated with the directive
     */
    parse_Tf(tokens) {
        this.currentMaterial.transmissionFilter = this.parseColor(tokens);
    }

    /**
     * Specifies the dissolve for the current material.
     *
     * Statement: d [-halo] `factor`
     *
     * Example: "d 0.5"
     *
     * The factor is the amount this material dissolves into the background. A
     * factor of 1.0 is fully opaque. This is the default when a new material is
     * created. A factor of 0.0 is fully dissolved (completely transparent).
     *
     * Unlike a real transparent material, the dissolve does not depend upon
     * material thickness nor does it have any spectral character. Dissolve works
     * on all illumination models.
     *
     * The dissolve statement allows for an optional "-halo" flag which indicates
     * that a dissolve is dependent on the surface orientation relative to the
     * viewer. For example, a sphere with the following dissolve, "d -halo 0.0",
     * will be fully dissolved at its center and will appear gradually more opaque
     * toward its edge.
     *
     * "factor" is the minimum amount of dissolve applied to the material. The
     * amount of dissolve will vary between 1.0 (fully opaque) and the specified
     * "factor". The formula is:
     *
     *    dissolve = 1.0 - (N*v)(1.0-factor)
     *
     * @param {string[]} tokens the tokens associated with the directive
     */
    parse_d(tokens) {
        // this ignores the -halo option as I can't find any documentation on what
        // it's supposed to be.
        this.currentMaterial.dissolve = parseFloat(tokens.pop());
    }

    /**
     * The "illum" statement specifies the illumination model to use in the
     * material. Illumination models are mathematical equations that represent
     * various material lighting and shading effects.
     *
     * The illumination number can be a number from 0 to 10. The following are
     * the list of illumination enumerations and their summaries:
     * 0. Color on and Ambient off
     * 1. Color on and Ambient on
     * 2. Highlight on
     * 3. Reflection on and Ray trace on
     * 4. Transparency: Glass on, Reflection: Ray trace on
     * 5. Reflection: Fresnel on and Ray trace on
     * 6. Transparency: Refraction on, Reflection: Fresnel off and Ray trace on
     * 7. Transparency: Refraction on, Reflection: Fresnel on and Ray trace on
     * 8. Reflection on and Ray trace off
     * 9. Transparency: Glass on, Reflection: Ray trace off
     * 10. Casts shadows onto invisible surfaces
     *
     * Example: "illum 2" to specify the "Highlight on" model
     *
     * @param {string[]} tokens the tokens associated with the directive
     */
    parse_illum(tokens) {
        this.currentMaterial.illumination = parseInt(tokens[0]);
    }

    /**
     * Optical Density (AKA Index of Refraction)
     *
     * Statement: Ni `index`
     *
     * Example: Ni 1.0
     *
     * Specifies the optical density for the surface. `index` is the value
     * for the optical density. The values can range from 0.001 to 10.  A value of
     * 1.0 means that light does not bend as it passes through an object.
     * Increasing the optical_density increases the amount of bending. Glass has
     * an index of refraction of about 1.5. Values of less than 1.0 produce
     * bizarre results and are not recommended
     *
     * @param {string[]} tokens the tokens associated with the directive
     */
    parse_Ni(tokens) {
        this.currentMaterial.refractionIndex = parseFloat(tokens[0]);
    }

    /**
     * Specifies the specular exponent for the current material. This defines the
     * focus of the specular highlight.
     *
     * Statement: Ns `exponent`
     *
     * Example: "Ns 250"
     *
     * `exponent` is the value for the specular exponent. A high exponent results
     * in a tight, concentrated highlight. Ns Values normally range from 0 to
     * 1000.
     *
     * @param {string[]} tokens the tokens associated with the directive
     */
    parse_Ns(tokens) {
        this.currentMaterial.specularExponent = parseInt(tokens[0]);
    }

    /**
     * Specifies the sharpness of the reflections from the local reflection map.
     *
     * Statement: sharpness `value`
     *
     * Example: "sharpness 100"
     *
     * If a material does not have a local reflection map defined in its material
     * defintions, sharpness will apply to the global reflection map defined in
     * PreView.
     *
     * `value` can be a number from 0 to 1000. The default is 60. A high value
     * results in a clear reflection of objects in the reflection map.
     *
     * Tip: sharpness values greater than 100 introduce aliasing effects in
     * flat surfaces that are viewed at a sharp angle.
     *
     * @param {string[]} tokens the tokens associated with the directive
     */
    parse_sharpness(tokens) {
        this.currentMaterial.sharpness = parseInt(tokens[0]);
    }

    /**
     * Parses the -cc flag and updates the options object with the values.
     *
     * @param {string[]} values the values passed to the -cc flag
     * @param {Object} options the Object of all image options
     */
    parse_cc(values, options) {
        options.colorCorrection = values[0] == "on";
    }

    /**
     * Parses the -blendu flag and updates the options object with the values.
     *
     * @param {string[]} values the values passed to the -blendu flag
     * @param {Object} options the Object of all image options
     */
    parse_blendu(values, options) {
        options.horizontalBlending = values[0] == "on";
    }

    /**
     * Parses the -blendv flag and updates the options object with the values.
     *
     * @param {string[]} values the values passed to the -blendv flag
     * @param {Object} options the Object of all image options
     */
    parse_blendv(values, options) {
        options.verticalBlending = values[0] == "on";
    }

    /**
     * Parses the -boost flag and updates the options object with the values.
     *
     * @param {string[]} values the values passed to the -boost flag
     * @param {Object} options the Object of all image options
     */
    parse_boost(values, options) {
        options.boostMipMapSharpness = parseFloat(values[0]);
    }

    /**
     * Parses the -mm flag and updates the options object with the values.
     *
     * @param {string[]} values the values passed to the -mm flag
     * @param {Object} options the Object of all image options
     */
    parse_mm(values, options) {
        options.modifyTextureMap.brightness = parseFloat(values[0]);
        options.modifyTextureMap.contrast = parseFloat(values[1]);
    }

    /**
     * Parses and sets the -o, -s, and -t  u, v, and w values
     *
     * @param {string[]} values the values passed to the -o, -s, -t flag
     * @param {Object} option the Object of either the -o, -s, -t option
     * @param {Integer} defaultValue the Object of all image options
     */
    parse_ost(values, option, defaultValue) {
        while (values.length < 3) {
            values.push(defaultValue);
        }

        option.u = parseFloat(values[0]);
        option.v = parseFloat(values[1]);
        option.w = parseFloat(values[2]);
    }

    /**
     * Parses the -o flag and updates the options object with the values.
     *
     * @param {string[]} values the values passed to the -o flag
     * @param {Object} options the Object of all image options
     */
    parse_o(values, options) {
        this.parse_ost(values, options.offset, 0);
    }

    /**
     * Parses the -s flag and updates the options object with the values.
     *
     * @param {string[]} values the values passed to the -s flag
     * @param {Object} options the Object of all image options
     */
    parse_s(values, options) {
        this.parse_ost(values, options.scale, 1);
    }

    /**
     * Parses the -t flag and updates the options object with the values.
     *
     * @param {string[]} values the values passed to the -t flag
     * @param {Object} options the Object of all image options
     */
    parse_t(values, options) {
        this.parse_ost(values, options.turbulence, 0);
    }

    /**
     * Parses the -texres flag and updates the options object with the values.
     *
     * @param {string[]} values the values passed to the -texres flag
     * @param {Object} options the Object of all image options
     */
    parse_texres(values, options) {
        options.textureResolution = parseFloat(values[0]);
    }

    /**
     * Parses the -clamp flag and updates the options object with the values.
     *
     * @param {string[]} values the values passed to the -clamp flag
     * @param {Object} options the Object of all image options
     */
    parse_clamp(values, options) {
        options.clamp = values[0] == "on";
    }

    /**
     * Parses the -bm flag and updates the options object with the values.
     *
     * @param {string[]} values the values passed to the -bm flag
     * @param {Object} options the Object of all image options
     */
    parse_bm(values, options) {
        options.bumpMultiplier = parseFloat(values[0]);
    }

    /**
     * Parses the -imfchan flag and updates the options object with the values.
     *
     * @param {string[]} values the values passed to the -imfchan flag
     * @param {Object} options the Object of all image options
     */
    parse_imfchan(values, options) {
        options.imfChan = values[0];
    }

    /**
     * This only exists for relection maps and denotes the type of reflection.
     *
     * @param {string[]} values the values passed to the -type flag
     * @param {Object} options the Object of all image options
     */
    parse_type(values, options) {
        options.reflectionType = values[0];
    }

    /**
     * Parses the texture's options and returns an options object with the info
     *
     * @param {string[]} tokens all of the option tokens to pass to the texture
     * @return {Object} a complete object of objects to apply to the texture
     */
    parseOptions(tokens) {
        let options = {
            colorCorrection: false,
            horizontalBlending: true,
            verticalBlending: true,
            boostMipMapSharpness: 0,
            modifyTextureMap: {
                brightness: 0,
                contrast: 1
            },
            offset: { u: 0, v: 0, w: 0 },
            scale: { u: 1, v: 1, w: 1 },
            turbulence: { u: 0, v: 0, w: 0 },
            clamp: false,
            textureResolution: null,
            bumpMultiplier: 1,
            imfChan: null
        };

        let option;
        let values;
        let optionsToValues = {};

        tokens.reverse();

        while (tokens.length) {
            const token = tokens.pop();

            if (token.startsWith("-")) {
                option = token.substr(1);
                optionsToValues[option] = [];
            } else {
                optionsToValues[option].push(token);
            }
        }

        for (option in optionsToValues) {
            if (!optionsToValues.hasOwnProperty(option)) {
                continue;
            }
            values = optionsToValues[option];
            let optionMethod = this[`parse_${option}`];
            if (optionMethod) {
                optionMethod.bind(this)(values, options);
            }
        }

        return options;
    }

    /**
     * Parses the given texture map line.
     *
     * @param {string[]} tokens all of the tokens representing the texture
     * @return {Object} a complete object of objects to apply to the texture
     */
    parseMap(tokens) {
        // according to wikipedia:
        // (https://en.wikipedia.org/wiki/Wavefront_.obj_file#Vendor_specific_alterations)
        // there is at least one vendor that places the filename before the options
        // rather than after (which is to spec). All options start with a '-'
        // so if the first token doesn't start with a '-', we're going to assume
        // it's the name of the map file.
        let filename;
        let options;
        if (!tokens[0].startsWith("-")) {
            [filename, ...options] = tokens;
        } else {
            filename = tokens.pop();
            options = tokens;
        }

        options = this.parseOptions(options);
        options["filename"] = filename;
        return options;
    }

    /**
     * Parses the ambient map.
     *
     * @param {string[]} tokens list of tokens for the map_Ka direcive
     */
    parse_map_Ka(tokens) {
        this.currentMaterial.mapAmbient = this.parseMap(tokens);
    }

    /**
     * Parses the diffuse map.
     *
     * @param {string[]} tokens list of tokens for the map_Kd direcive
     */
    parse_map_Kd(tokens) {
        this.currentMaterial.mapDiffuse = this.parseMap(tokens);
    }

    /**
     * Parses the specular map.
     *
     * @param {string[]} tokens list of tokens for the map_Ks direcive
     */
    parse_map_Ks(tokens) {
        this.currentMaterial.mapSpecular = this.parseMap(tokens);
    }

    /**
     * Parses the emissive map.
     *
     * @param {string[]} tokens list of tokens for the map_Ke direcive
     */
    parse_map_Ke(tokens) {
        this.currentMaterial.mapEmissive = this.parseMap(tokens);
    }

    /**
     * Parses the specular exponent map.
     *
     * @param {string[]} tokens list of tokens for the map_Ns direcive
     */
    parse_map_Ns(tokens) {
        this.currentMaterial.mapSpecularExponent = this.parseMap(tokens);
    }

    /**
     * Parses the dissolve map.
     *
     * @param {string[]} tokens list of tokens for the map_d direcive
     */
    parse_map_d(tokens) {
        this.currentMaterial.mapDissolve = this.parseMap(tokens);
    }

    /**
     * Parses the anti-aliasing option.
     *
     * @param {string[]} tokens list of tokens for the map_aat direcive
     */
    parse_map_aat(tokens) {
        this.currentMaterial.antiAliasing = tokens[0] == "on";
    }

    /**
     * Parses the bump map.
     *
     * @param {string[]} tokens list of tokens for the map_bump direcive
     */
    parse_map_bump(tokens) {
        this.currentMaterial.mapBump = this.parseMap(tokens);
    }

    /**
     * Parses the bump map.
     *
     * @param {string[]} tokens list of tokens for the bump direcive
     */
    parse_bump(tokens) {
        this.parse_map_bump(tokens);
    }

    /**
     * Parses the disp map.
     *
     * @param {string[]} tokens list of tokens for the disp direcive
     */
    parse_disp(tokens) {
        this.currentMaterial.mapDisplacement = this.parseMap(tokens);
    }

    /**
     * Parses the decal map.
     *
     * @param {string[]} tokens list of tokens for the map_decal direcive
     */
    parse_decal(tokens) {
        this.currentMaterial.mapDecal = this.parseMap(tokens);
    }

    /**
     * Parses the refl map.
     *
     * @param {string[]} tokens list of tokens for the refl direcive
     */
    parse_refl(tokens) {
        this.currentMaterial.mapReflections.push(this.parseMap(tokens));
    }

    /**
     * Parses the MTL file.
     *
     * Iterates line by line parsing each MTL directive.
     *
     * This function expects the first token in the line
     * to be a valid MTL directive. That token is then used
     * to try and run a method on this class. parse_[directive]
     * E.g., the `newmtl` directive would try to call the method
     * parse_newmtl. Each parsing function takes in the remaining
     * list of tokens and updates the currentMaterial class with
     * the attributes provided.
     */
    parse() {
        let lines = this.data.split(/\r?\n/);
        for (let line of lines) {
            line = line.trim();
            if (!line || line.startsWith("#")) {
                continue;
            }

            let tokens = line.split(/\s/);
            let directive;
            [directive, ...tokens] = tokens;

            let parseMethod = this[`parse_${directive}`];

            if (!parseMethod) {
                console.warn(`Don't know how to parse the directive: "${directive}"`);
                continue;
            }

            // console.log(`Parsing "${directive}" with tokens: ${tokens}`);
            parseMethod.bind(this)(tokens);
        }

        // some cleanup. These don't need to be exposed as public data.
        delete this.data;
        this.currentMaterial = null;
    }

    /* eslint-enable camelcase*/
}
