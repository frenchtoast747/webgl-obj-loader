import {expect} from 'chai';

import Mesh from '../src/mesh';


describe('Mesh', function() {
  describe('Test vertex parsing', function() {
    it('should contain the x, y, and z coordinates', function() {
        const m = new Mesh(
          `
          v 0 0 0
          v 1.0 0 0
          v -1.0000 -1 0
          # a face is required in order
          # for vertices to be populated
          f 1 2 3
          `
        );
        expect(m.vertices).to.deep.equal([
          0, 0, 0,
          1, 0, 0,
          -1, -1, 0
        ]);
    });
  });

  describe('Test vertex normal parsing', function(){
    it('should contain the x, y, and z vector components', function() {
      const m = new Mesh(
        `
        # including a single vertex so that the face
        # parsing works successfully.
        v 0 0 0

        vn 1 1 1
        vn 0 0 0
        vn -1 0.1234 1.0
        f 1/1 1/2 1/3
        `
      );
      expect(m.vertexNormals).to.deep.equal([
        1, 1, 1,
        0, 0, 0,
        -1, 0.1234, 1
      ]);
    });
  });

  describe('Test vertex texture parsing', function(){
    it('should contain the u and v texture coordinates', function() {
      const m = new Mesh(
        `
        # including a single vertex and a single vertex normal so
        # that the face parsing works successfully.
        v 0 0 0
        vn 0 0 0

        vt 0 0.456
        vt 1.0 1
        vt -1.1 -1
        f 1/1/1 1/2/1 1/3/1
        `
      );
      expect(m.textures).to.deep.equal([
        0, 0.456,
        1, 1,
        -1.1, -1
      ]);
    });

    it('should contain the u, v, and w texture coordinates', function() {
      const m = new Mesh(
        `
        # including a single vertex and a single vertex normal so
        # that the face parsing works successfully.
        v 0 0 0
        vn 0 0 0

        vt 0 0.456 0.5
        vt 1.0 1 0
        vt -1.1 -1 1.0
        f 1/1/1 1/2/1 1/3/1
        `, {
          enableWTextureCoord: true
        }
      );
      expect(m.textures).to.deep.equal([
           0, 0.456, 0.5,
           1,     1,   0,
        -1.1,    -1,   1
      ]);
    });
  });

  describe('Test face parsing', function(){
    const data = `
    v 0 0 0
    v 1 1 1
    v 2 2 2
    v 3 3 3

    vn 0 0 0
    vn 1 1 1
    vn 2 2 2
    vn 3 3 3

    vt 0.0 0.0
    vt 0.1 0.1
    vt 0.2 0.2
    vt 0.3 0.3
    `
    it('should contain the unique vertex triplets and their indices', function() {
      let meshData = data + `
      f 1/1/1 2/2/2 3/3/3
      f 2/2/2 3/3/3 4/4/4
      `
      const m = new Mesh(meshData);
      expect(m.vertices).to.deep.equal([
        0, 0, 0,  1, 1, 1,  2, 2, 2,  3, 3, 3,
      ]);
      expect(m.vertexNormals).to.deep.equal([
        0, 0, 0,  1, 1, 1,  2, 2, 2,  3, 3, 3,
      ]);
      expect(m.textures).to.deep.equal([
        0.0, 0.0,  0.1, 0.1,  0.2, 0.2,  0.3, 0.3,
      ]);
      expect(m.indices).to.deep.equal([
        0, 1, 2, 1, 2, 3
      ]);
    });

    it('should contain the proper index order when parsing quads', function() {
      let meshData = data + `
      f 1/1/1 2/2/2 3/3/3 4/4/4
      `
      const m = new Mesh(meshData);
      expect(m.indices).to.deep.equal([
        0, 1, 2, 2, 3, 0
      ]);
    });
  });

});
