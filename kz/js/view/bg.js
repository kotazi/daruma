
define(['enchant', 'core'], function(enchant, core) {

  var Map = enchant.Class.create(enchant.Sprite, {

    //初期化処理
    initialize: function(x, y) {
      enchant.Sprite.call(this, 320, 320);
      this.backgroundColor = '#4abafa';
      //サーフィスの生成
      var surface = new Surface(320, 320);
      for (var i = 0; i < 20; i++) {
        surface.draw(core.assets['img/map2.png'], 0, 0, 16, 16, 16 * i, 16 * 12, 16, 16);
      }
      //サーフィスをスプライト画像に設定
      this.image = surface;

    }
  });

  return Map;
});