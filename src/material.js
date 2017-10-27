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
export class MaterialParser {
  constructor (mtlData) {
    this.data = mtlData;
    this.currentMaterial = null;
    this.materials = {};
  }

  parse_newmtl(tokens) {
    let name = tokens[0];
    console.info('Parsing new Material:', name);

    this.currentMaterial = new Material(name);
    this.materials[name] = this.currentMaterial;
  }

  /**
   * See the documenation for parse_Ka below for a better understanding.
   *
   * Given a list of possible color tokens, returns an array of R, G, and B
   * color values.
   */
  parseColor(tokens) {
    if (tokens[0] == 'spectral') {
      console.error(
        'The MTL parser does not support spectral curve files. You will ' +
        'need to convert the MTL colors to either RGB or CIEXYZ.'
      );
      return
    }

    if (tokens[0] == 'xyz') {
      console.warn('TODO: convert XYZ to RGB');
      return
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
    this.currentMaterial.ambient = this.parseColor(tokens);
  }

  /**
   * Diffuse Reflectivity
   *
   * Similar to the Ka directive. Simply replace "Ka" with "Kd" and the rules
   * are the same
   */
  parse_Kd(tokens) {
    this.currentMaterial.diffuse = this.parseColor(tokens);
  }

  /**
   * Spectral Reflectivity
   *
   * Similar to the Ka directive. Simply replace "Ks" with "Kd" and the rules
   * are the same
   */
  parse_Ks(tokens) {
    this.currentMaterial.specular = this.parseColor(tokens);
  }

  /**
   * Emissive
   *
   * The amount and color of light emitted by the object.
   */
  parse_Ke(tokens) {
    this.currentMaterial.emissive = this.parseColor(tokens);
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
    this.currentMaterial.transmissionFilter = this.parseColor(tokens);
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
    // this ignores the -halo option as I can't find any documentation on what
    // it's supposed to be.
    this.currentMaterial.dissolve = parseFloat(tokens.pop());
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
   * Increasing the optical_density increases the amount of bending. Glass has an
   * index of refraction of about 1.5. Values of less than 1.0 produce bizarre
   * results and are not recommended
   */
  parse_Ni(tokens) {
    this.currentMaterial.refractionIndex = parseInt(tokens[0]);
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
   * `value` can be a number from 0 to 1000. The default is 60. A high value results
   * in a clear reflection of objects in the reflection map.
   *
   * Tip: sharpness values greater than 100 introduce aliasing effects in
   * flat surfaces that are viewed at a sharp angle.
   */
  parse_sharpness(tokens) {
    this.currentMaterial.sharpness = parseInt(tokens[0]);
  }

  parse_cc(values, options) {
    options.colorCorrection = values[0] == 'on'
  }

  parse_blendu(values, options) {
    options.horizontalBlending = values[0] == 'on';
  }

  parse_blendv(values, options) {
    options.verticalBlending = values[0] == 'on';
  }

  parse_boost(values, options) {
    options.boostMipMapSharpness = parseFloat(values[0]);
  }

  parse_mm(values, options) {
    options.modifyTextureMap.brightness = parseFloat(values[0]);
    options.modifyTextureMap.contrast = parseFloat(values[1]);
  }

  parse_ost(values, option, defaultValue) {
    while (values.length < 3) {
      values.push(defaultValue);
    }

    option.u = values[0];
    option.v = values[1];
    option.w = values[2];
  }

  parse_o(values, options) {
    parse_ost(values, options.offset, 0);
  }

  parse_s(values, options) {
    parse_ost(values, options.scale, 1);
  }

  parse_t(values, options) {
    parse_ost(values, options.turbulence, 0);
  }

  parse_texres(values, options) {
    options.textureResolution = parseFloat(values[0]);
  }

  parse_clamp(values, options) {
    options.clamp = values[0] == 'on';
  }

  parse_bm(values, options) {
    options.bumpMultiplier = parseFloat(values[0]);
  }

  parse_imfchan(values, options) {
    options.imfChan = values[0];
  }

  /**
   * This only exists for relection maps and denotes the type of reflection.
   */
  parse_type(values, options) {
    options.reflectionType = values[0];
  }

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
      offset: {u: 0, v: 0, w: 0},
      scale: {u: 1, v: 1, w: 1},
      turbulence: {u: 0, v: 0, w: 0},
      clamp: false,
      textureResolution: null,
      bumpMultiplier: 1,
      imfChan: null
    }

    let option, values;
    let optionsToValues = {};

    tokens.reverse();

    while (tokens.length) {
      const token = tokens.pop();

      if (token.startsWith('-')) {
        option = token.substr(1);
        optionsToValues[option] = []
      }
      else {
        optionsToValues[option].push(token)
      }
    }

    for ([option, values] of Object.entries(optionsToValues)) {
      let optionMethod = this[`parse_${option}`];
      if (optionMethod) {
        optionMethod.bind(this)(values, options);
      }
    }

    return options;
  }

  parseMap(tokens) {
    // according to wikipedia:
    // (https://en.wikipedia.org/wiki/Wavefront_.obj_file#Vendor_specific_alterations)
    // there is at least one vendor that places the filename before the options
    // rather than after (which is to spec). All options start with a '-'
    // so if the first token doesn't start with a '-', we're going to assume it's
    // the name of the map file.
    let filename, options;
    if (!tokens[0].startsWith('-')) {
      [filename, ...options] = tokens;
    }
    else {
      filename = tokens.pop();
      options = tokens;
    }

    options = this.parseOptions(options);
    return {filename, options};
  }

  parse_map_Ka(tokens) {
    this.currentMaterial.mapAmbient = this.parseMap(tokens);
  }

  parse_map_Kd(tokens) {
    this.currentMaterial.mapDiffuse = this.parseMap(tokens);
  }

  parse_map_Ks(tokens) {
    this.currentMaterial.mapSpecular = this.parseMap(tokens);
  }

  parse_map_Ke(tokens) {
    this.currentMaterial.mapEmissive = this.parseMap(tokens);
  }

  parse_map_Ns(tokens) {
    this.currentMaterial.mapSpecularExponent = this.parseMap(tokens);
  }

  parse_map_d(tokens) {
    this.currentMaterial.mapDissolve = this.parseMap(tokens);
  }

  parse_map_aat(tokens) {
    this.currentMaterial.antiAliasing = tokens[0] == 'on';
  }

  parse_map_bump(tokens) {
    this.currentMaterial.mapBump = this.parseMap(tokens);
  }

  parse_bump(tokens) {
    this.currentMaterial.mapBump = this.parseMap(tokens);
  }

  parse_disp(tokens) {
    this.currentMaterial.mapDisplacement = this.parseMap(tokens);
  }

  parse_map_decal(tokens) {
    this.currentMaterial.mapDecal = this.parseMap(tokens);
  }

  parse_refl(tokens) {
    this.currentMaterial.mapReflections.push(this.parseMap(tokens));
  }

  parse(){
    let lines = this.data.split(/\r?\n/);
    for (let line of lines){
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


