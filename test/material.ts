import { expect } from 'chai';

import { MaterialLibrary } from '../src/material';


describe('MaterialLibrary', function () {
    describe('#parse_newmtl()', function () {
        it('should update materials object to contain 3 materials', function () {
            let m = new MaterialLibrary(
                `
            newmtl material_1
            newmtl material_2
            newmtl material_3
            `
            );

            expect(m.materials).to.have.all
                .keys('material_1', 'material_2', 'material_3');
        });
    });

    describe('#parseColor', function () {
        it('should parse RGB colors correctly', function () {
            let m = new MaterialLibrary(
                `
            newmtl my_material
            Ka 1.000000 1.000000 1.000000
            Kd 0.640000 0.640000 0.640000
            Ks 0.500000 0.500000 0.500000
            Ke 0.000000 0.000000 0.000000
            Tf 1.0000 1.0000 1.0000

            newmtl material2
            Ka 1.1
            `
            );

            let material = m.materials.my_material;

            expect(material.ambient).to.be.deep.equal([1.0, 1.0, 1.0]);
            expect(material.diffuse).to.be.deep.equal([0.64, 0.64, 0.64]);
            expect(material.specular).to.be.deep.equal([0.5, 0.5, 0.5]);
            expect(material.emissive).to.be.deep.equal([0, 0, 0]);
            expect(material.transmissionFilter).to.be.deep.equal([1, 1, 1]);

            expect(m.materials.material2.ambient).to.be.deep.equal([1.1, 1.1, 1.1]);
        });
    });

    describe('#parse_d', function () {
        it('should return the dissolve value as a number', function () {
            let m = new MaterialLibrary(
                `
            newmtl my_material
            d 0.5
            `
            );
            let material = m.materials.my_material;

            expect(material.dissolve).to.be.equal(0.5);
        });
    });

    describe('#parse_illum', function () {
        it('should return the illum value as a number', function () {
            let m = new MaterialLibrary(
                `
            newmtl my_material
            illum 2
            `
            );
            let material = m.materials.my_material;

            expect(material.illumination).to.be.equal(2);
        });
    });

    describe('#parse_Ni', function () {
        it('should return the refraction index value as a number', function () {
            let m = new MaterialLibrary(
                `
            newmtl my_material
            Ni 2.5
            `
            );
            let material = m.materials.my_material;

            expect(material.refractionIndex).to.be.equal(2.5);
        });
    });

    describe('#parse_Ns', function () {
        it('should return the specular exponent value as a number', function () {
            let m = new MaterialLibrary(
                `
            newmtl my_material
            Ns 250
            `
            );
            let material = m.materials.my_material;

            expect(material.specularExponent).to.be.equal(250);
        });
    });

    describe('#parse_sharpness', function () {
        it('should return the sharpess value as a number', function () {
            let m = new MaterialLibrary(
                `
            newmtl my_material
            sharpness 100
            `
            );
            let material = m.materials.my_material;

            expect(material.sharpness).to.be.equal(100);
        });
    });

    describe('#parseMap', function () {
        it('should parse the filename and options associated with the directives',
            function () {
                let m = new MaterialLibrary(
                    `
                newmtl my_material
                map_Ka -cc on -blendu off -blendv off filename.jpg
                map_Kd -boost 123 -mm 1 2 filename.jpg
                map_Ks -o 1 other.jpg
                map_Ke -s 2 3 too.jpg
                map_Ns -t 4 5 6 lol.jpg
                refl -bm 42 -imfchan r -type sphere texture.jpg
                map_d -clamp on filename.jpg
                map_aat on
                # throwing in both so both functions get coverage
                map_bump -texres 1024 file.jpg
                bump -texres 1024 file.jpg
                disp filename.jpg -cc on
                decal file.jpg
                `
                );
                let material = m.materials.my_material;

                expect(material.mapAmbient.colorCorrection).to.be.true;
                expect(material.mapAmbient.horizontalBlending).to.be.false;
                expect(material.mapAmbient.verticalBlending).to.be.false;
                expect(material.mapAmbient.filename).to.be.equal('filename.jpg');
                expect(material.mapDiffuse.boostMipMapSharpness)
                    .to.be.equal(123);
                expect(material.mapDiffuse.modifyTextureMap.brightness)
                    .to.be.equal(1);
                expect(material.mapDiffuse.modifyTextureMap.contrast)
                    .to.be.equal(2);
                expect(material.mapSpecular.offset)
                    .to.be.deep.equal({ u: 1, v: 0, w: 0 });
                expect(material.mapEmissive.scale)
                    .to.be.deep.equal({ u: 2, v: 3, w: 1 });
                expect(material.mapSpecularExponent.turbulence)
                    .to.be.deep.equal({ u: 4, v: 5, w: 6 });
                expect(material.mapReflections[0].bumpMultiplier)
                    .to.be.equal(42);
                expect(material.mapReflections[0].imfChan)
                    .to.be.equal('r');
                expect(material.mapReflections[0].reflectionType)
                    .to.be.equal('sphere');
                expect(material.antiAliasing).to.be.true;
                expect(material.mapBump.textureResolution).to.be.equal(1024);
                expect(material.mapDisplacement.filename)
                    .to.be.equal('filename.jpg');
                expect(material.mapDisplacement.colorCorrection).to.be.true;
                expect(material.mapDecal.filename).to.be.equal('file.jpg');
            });

        it('should parse the filename paths correctly and normalize the path separators',
            function () {
                let m = new MaterialLibrary(
                    `
                newmtl my_material
                map_Ka -cc on -blendu off -blendv off path\\to\\ambient.jpg
                map_Kd -boost 123 -mm 1 2 filename.jpg
                map_Ks -o 1 other.jpg
                map_Ke -s 2 3 too.jpg
                map_Ns -t 4 5 6 lol.jpg
                refl -bm 42 -imfchan r -type sphere texture.jpg
                map_d -clamp on filename.jpg
                map_aat on
                # throwing in both so both functions get coverage
                map_bump -texres 1024 path/to/file.jpg
                bump -texres 1024 file.jpg
                disp path\\to/displacement.jpg -cc on
                decal file.jpg
                `
                );
                let material = m.materials.my_material;

                expect(material.mapAmbient.filename).to.be.equal('path/to/ambient.jpg');
                expect(material.mapDisplacement.filename).to.be.equal('path/to/displacement.jpg');
                expect(material.mapDecal.filename).to.be.equal('file.jpg');
            });
    });
});
