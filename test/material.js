import { expect } from 'chai';

import { MaterialParser, Material } from '../src/material';

function makeMP(data) {
    let m = new MaterialParser(data);
    m.parse();
    return m;
}

describe('MaterialParser', function() {
  describe('#parse_newmtl()', function() {
    it('should update materials object to contain 3 materials', function() {
        let m = makeMP(
            `
            newmtl material_1
            newmtl material_2
            newmtl material_3
            `
        );

        expect(m.materials).to.have.all.keys('material_1', 'material_2', 'material_3');
    });
    it('should parse RGB colors correctly', function() {
        let m = makeMP(
            `
            newmtl my_material
            Ka 1.000000 1.000000 1.000000
            Kd 0.640000 0.640000 0.640000
            Ks 0.500000 0.500000 0.500000
            Ke 0.000000 0.000000 0.000000
            Tf 1.0000 1.0000 1.0000
            `
        );

        let material = m.materials.my_material;

        expect(material.ambient).to.be.deep.equal([1.0, 1.0, 1.0]);
        expect(material.diffuse).to.be.deep.equal([0.64, 0.64, 0.64]);
        expect(material.specular).to.be.deep.equal([0.5, 0.5, 0.5]);
        expect(material.emissive).to.be.deep.equal([0, 0, 0]);
        expect(material.transmissionFilter).to.be.deep.equal([1, 1, 1]);
    })
  });
});