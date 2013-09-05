
define(['enchant', 'core'], function(enchant, core) {

  var Chara = enchant.Class.create(enchant.Sprite, {

    //初期化処理
    initialize: function(x0, y0, x1, y1) {
      enchant.Sprite.call(this, 32, 32);
//      var chara = new Sprite(32, 32);
      var surface = new Surface(96, 128);
      surface.draw(core.assets['img/chara0.png'], x0, y0, 96, 128, 0, 0, 96, 128);
      this.image = surface;
      this.x = x1;
      this.y = y1 || 16 * 10;
      this.frame = 7;
      this.vx = 0;
      this.isMoving = false;
    },

    //位置を指定
    setPosition : function(x, y) {
      this.x = x;
      this.y = y;
    },
    setSeed : function(vx) {
      this.vx = vx;
    },
    toggleMoving : function(bool) {
      this.isMoving = bool;
    }

  });

  return Chara;
});