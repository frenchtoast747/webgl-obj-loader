import { expect } from 'chai';

import Mesh from '../src/mesh';


describe('Mesh', function () {
  describe('Test vertex parsing', function () {
    it('should contain the x, y, and z coordinates', function () {
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

  describe('Test vertex normal parsing', function () {
    it('should contain the x, y, and z vector components', function () {
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

  describe('Test vertex texture parsing', function () {
    it('should contain the u and v texture coordinates', function () {
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

    it('should contain the u, v, and w texture coordinates', function () {
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
        1, 1, 0,
        -1.1, -1, 1
      ]);
    });
  });

  describe('Test face parsing', function () {
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
    it('should contain the unique vertex triplets and their indices', function () {
      let meshData = data + `
      f 1/1/1 2/2/2 3/3/3
      f 2/2/2 3/3/3 4/4/4
      `
      const m = new Mesh(meshData);
      expect(m.vertices).to.deep.equal([
        0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3,
      ]);
      expect(m.vertexNormals).to.deep.equal([
        0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3,
      ]);
      expect(m.textures).to.deep.equal([
        0.0, 0.0, 0.1, 0.1, 0.2, 0.2, 0.3, 0.3,
      ]);
      expect(m.indices).to.deep.equal([
        0, 1, 2, 1, 2, 3
      ]);
    });

    it('should contain the proper index order when parsing quads', function () {
      let meshData = data + `
      f 1/1/1 2/2/2 3/3/3 4/4/4
      `
      const m = new Mesh(meshData);
      expect(m.indices).to.deep.equal([
        0, 1, 2, 2, 3, 0
      ]);
    });

    it('should allow reuse of existing verts when parsing quads', function () {
      const data = `
      v 0 0 0
      v 1 1 1
      v 2 2 2
      v 3 3 3
      v 4 4 4
      v 5 5 5

      vn 0 0 0
      vn 1 1 1
      vn 2 2 2
      vn 3 3 3
      vn 4 4 4
      vn 5 5 5

      vt 0.0 0.0
      vt 0.1 0.1
      vt 0.2 0.2
      vt 0.3 0.3
      vt 0.4 0.4
      vt 0.5 0.5

      f 1/1/1 2/2/2 3/3/3 4/4/4
      f 5/5/5 6/6/6 1/1/1 2/2/2
      `
      const m = new Mesh(data);
      expect(m.indices).to.deep.equal([
        0, 1, 2, 2, 3, 0, 4, 5, 0, 0, 1, 4
      ]);
      expect(m.vertices).to.deep.equal([
        0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5
      ]);
    });

    it('should triangulate n-gons', function () {
      const data = `
      v 0 0 0
      v 1 1 1
      v 2 2 2
      v 3 3 3
      v 4 4 4
      v 5 5 5
      v 6 6 6

      vn 0 0 0
      vn 1 1 1
      vn 2 2 2
      vn 3 3 3
      vn 4 4 4
      vn 5 5 5
      vn 6 6 6

      vt 0.0 0.0
      vt 0.1 0.1
      vt 0.2 0.2
      vt 0.3 0.3
      vt 0.4 0.4
      vt 0.5 0.5
      vt 0.6 0.6

      f 1/1/1 2/2/2 3/3/3 4/4/4 5/5/5 6/6/6
      `
      const m = new Mesh(data);
      expect(m.indices).to.deep.equal([
        0, 1, 2, 0, 2, 3, 0, 3, 4, 0, 4, 5
      ]);
    });
  });

  describe('Test tangents and bitangent calculation', function () {
    const data = `
    v 0 0 0
    v 0 1 0
    v 1 0 0

    vn 0 0 1

    vt 0.0 0.0
    vt 0.1 0.1

    f 1/1/1 2/2/1 3/2/1
    `

    const m = new Mesh(data);
    m.calculateTangentsAndBitangents();
    const tangents = m.tangents;
    const bitangents = m.bitangents;
    const normals = m.vertexNormals;

    it('should contain tangents, bitangents and normals with the same length', function () {
      const normalsLength = normals.length;
      expect(tangents).to.have.length(normalsLength);
      expect(bitangents).to.have.length(normalsLength);
    });

    it('should contain tangents orthogonal to normals', function () {
      let res = [];
      for (let i = 0; i < normals.length; i += 3) {
        const nx = normals[i + 0];
        const ny = normals[i + 1];
        const nz = normals[i + 2];

        const tx = tangents[i + 0];
        const ty = tangents[i + 1];
        const tz = tangents[i + 2];

        res.push(nx * tx + ny * ty + nz * tz);
      }
      res.forEach(i => expect(i).to.be.closeTo(0, 0.01));
    });

    it('should contain bitangents orthogonal to normals', function () {
      let res = [];
      for (let i = 0; i < normals.length; i += 3) {
        const nx = normals[i + 0];
        const ny = normals[i + 1];
        const nz = normals[i + 2];

        const bx = bitangents[i + 0];
        const by = bitangents[i + 1];
        const bz = bitangents[i + 2];

        res.push(nx * bx + ny * by + nz * bz);
      }
      res.forEach(i => expect(i).to.be.closeTo(0, 0.01));
    });
  });
});
