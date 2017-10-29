import {expect} from 'chai';

import {Layout} from '../src/layout';

describe('Layout', function() {
  describe('#constructor()', function() {
    it('should compute stride', function() {
        let layout = new Layout(
            Layout.POSITION,
            Layout.UV);
        expect(layout).to.have.a.property('stride').that.equals(20);
    });
    it('should set the offset correctly for each attribute', function() {
        let layout = new Layout(
            Layout.POSITION,
            Layout.UV,
            Layout.MATERIAL_INDEX);
        expect(layout).to.have.a.property('position')
            .that.has.a.property('offset').that.equals(0);
        expect(layout).to.have.a.property('uv')
            .that.has.a.property('offset').that.equals(12);
        expect(layout).to.have.a.property('materialIndex')
            .that.has.a.property('offset').that.equals(20);
    });
    it('should set the stride correctly for each attribute', function() {
        let layout = new Layout(
            Layout.POSITION,
            Layout.UV,
            Layout.MATERIAL_INDEX);
        expect(layout).to.have.a.property('position')
            .that.has.a.property('stride').that.equals(24);
        expect(layout).to.have.a.property('uv')
            .that.has.a.property('stride').that.equals(24);
        expect(layout).to.have.a.property('materialIndex')
            .that.has.a.property('stride').that.equals(24);
    });
    it('should throw when it detects duplicates', function() {
        expect(() => new Layout(Layout.UV, Layout.UV)).to.throw();
    });
  });
});
