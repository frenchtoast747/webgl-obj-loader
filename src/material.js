export class Material {
  constructor (name) {
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
    // valid range is between 0 and 1000
    this.specular_exponent = 0;
    // either d or Tr; valid values are normalized
    this.transparency = 0;
    // the enum of the illumination model to use
    this.illumination = 0;
    // map_Kd
    this.map_diffuse = {};
    // map_Ka
    this.map_ambient = {};
    // map_Ks
    this.map_specular = {};
    // map_Ns
    this.map_specular_component = {};
    // map_d
    this.map_alpha = {};
    // map_bump or bump
    this.map_bump = {};
    // disp
    this.map_displacement = {};
    // decal
    this.map_decal = {};
  }
}

/**
 * https://en.wikipedia.org/wiki/Wavefront_.obj_file
 * http://paulbourke.net/dataformats/mtl/
 */
export class MaterialParser {
  constructor (mtlData) {
    this.data = mtlData;
    this.currentMaterial = null;
    this.materials = [];
  }

  parse_newmtl(tokens) {
    let name = tokens[0];
    console.info('Parsing new Material:', name);

    this.currentMaterial = new Material(name);
    this.materials.push(this.currentMaterial);
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
   * The "g" and "b" values are optional. If only the "r" value is specified,
   * then the "g" and "b" values are assigned the value of "r". Values are normally
   * in the range 0.0 to 1.0. Values outside of this range increase or decrease the
   * reflectivity accordingly.
   *
   * The "Ka spectral" form specifies the ambient reflectivity using a
   * spectral curve. "file.rfl" is the name of the ".rfl" file containing
   * the curve data. "factor" is an optional argument which is a multiplier
   * for the values in the .rfl file and defaults to 1.0 if not specified.
   *
   * The "Ka xyz" form specifies the ambient reflectivity using CIEXYZ values.
   * "x y z" are the values of the CIEXYZ color space. The "y" and "z" arguments
   * are optional and take on the value of the "x" component if only "x" is specified.
   * The "x y z" values are normally in the range of 0.0 to 1.0 and increase or decrease
   * ambient reflectivity accordingly outside of that range.
   */
  parse_Ka(tokens) {

  }

  /**
   * Diffuse Reflectivity
   *
   * Similar to the Ka directive. Simply replace "Ka" with "Kd" and the rules
   * are the same
   */
  parse_Kd(tokens) {

  }

  /**
   * Spectral Reflectivity
   *
   * Similar to the Ka directive. Simply replace "Ks" with "Kd" and the rules
   * are the same
   */
  parse_Ks(tokens) {

  }

  /**
   * Emissive
   *
   * The amount and color of light emitted by the object.
   */
  parse_Ke(tokens) {

  }

  /**
   * Transmission Filter
   *
   * Any light passing through the object is filtered by the transmission filter,
   * which only allows specific colors to pass through. For example, Tf 0 1 0 allows
   * all of the green to pass through and filters out all of the red and blue.
   *
   * Similar to the Ka directive. Simply replace "Ks" with "Tf" and the rules
   * are the same
   */
  parse_Tf(tokens) {

  }

  /**
   * Specifies the dissolve for the current material.
   *
   * Statement: d [-halo] `factor`
   *
   * Example: "d 0.5"
   *
   * The factor is the amount this material dissolves into the background. A factor
   * of 1.0 is fully opaque. This is the default when a new material is created.
   * A factor of 0.0 is fully dissolved (completely transparent).
   *
   * Unlike a real transparent material, the dissolve does not depend upon material
   * thickness nor does it have any spectral character. Dissolve works on all
   * illumination models.
   *
   * The dissolve statement allows for an optional "-halo" flag which indicates
   * that a dissolve is dependent on the surface orientation relative to the viewer.
   * For example, a sphere with the following dissolve, "d -halo 0.0", will be fully
   * dissolved at its center and will appear gradually more opaque toward its edge.
   *
   * "factor" is the minimum amount of dissolve applied to the material. The amount
   * of dissolve will vary between 1.0 (fully opaque) and the specified "factor". The
   * formula is:
   *
   *    dissolve = 1.0 - (N*v)(1.0-factor)
   */
  parse_d(tokens) {

  }

  /**
   * The "illum" statement specifies the illumination model to use in the material.
   * Illumination models are mathematical equations that represent various material
   * lighting and shading effects.
   *
   * The illumination number can be a number from 0 to 10. The following are the list
   * of illumination enumerations and their summaries:
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
   */
  parse_illum(tokens) {

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
   * Increasing the optical_density increases the amount of bending. Glass has an
   * index of refraction of about 1.5. Values of less than 1.0 produce bizarre
   * results and are not recommended
   */
  parse_Ni(tokens) {

  }

  /**
   * Specifies the specular exponent for the current material. This defines the focus
   * of the specular highlight.
   *
   * Statement: Ns `exponent`
   *
   * Example: "Ns 250"
   *
   * `exponent` is the value for the specular exponent. A high exponent results in a
   * tight, concentrated highlight. Ns Values normally range from 0 to 1000.
   */
  parse_Ns(tokens) {

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
   * `value` can be a number from 0 to 1000. The default is 60. A high value results
   * in a clear reflection of objects in the reflection map.
   *
   * Tip: sharpness values greater than 100 introduce aliasing effects in
   * flat surfaces that are viewed at a sharp angle.
   */
  parse_sharpness(tokens) {

  }

  parse_map_Ka(tokens) {

  }

  parse_map_Kd(tokens) {

  }

  parse_map_Ks(tokens) {

  }

  parse_map_Ke(tokens) {

  }

  parse_map_Ns(tokens) {

  }

  parse_map_d(tokens) {

  }

  parse_map_bump(tokens) {

  }

  parse_bump(tokens) {

  }

  parse_disp(tokens) {

  }

  parse_map_decal(tokens) {

  }

  parse_refl(tokens) {

  }

  parse_options(line){

  }

  parse(){
    let lines = this.data.split(/\r?\n/);
    for(let line of lines){
      line = line.trim();
      if (!line || line.startsWith('#')) {
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

      console.debug(`Parsing "${directive}" with tokens: ${tokens}`);
      parseMethod.bind(this)(tokens);
    }
  }

};


