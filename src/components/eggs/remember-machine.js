/**
 * Power up that lets you see which portals you've visited already.
 */
AFRAME.registerComponent('remember-machine', {
  init: function () {
    var el;
    el = document.createElement('a-entity');
    el.setAttribute('obj-model', {
      obj: utils.assetPath('assets/models/remembermachine/model.obj'),
      mtl: utils.assetPath('assets/models/remembermachine/materials.mtl')
    });
    el.setAttribute('mixin', 'hoverAnimation');
    el.object3D.position.set(
      window.utils.random(200) * 10,
      1.6,
      window.utils.random(200) * 10
    );
    this.el.appendChild(el);
  }
});
