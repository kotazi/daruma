
//設定
requirejs.config({

  shim: {

    enchant: {
      exports: 'enchant'
    },

    nineleap: {
      deps: ['enchant']
    },

    ui: {
      deps: ['enchant']
    }

  },

  paths: {
    enchant: './../lib/enchantjs/enchant',
    nineleap: './../lib/enchantjs/nineleap.enchant',
    ui: './../lib/enchantjs/ui.enchant',
    core: './common',
    chara: './view/chara',
    map: './view/bg'
  }

});

//実行関数
require([
  'enchant',
  'nineleap',
  'ui',
  'core',
  'chara',
  'map'

], function(enchant, nineleap, ui, core, Chara, Map) {

  core.addEventListener('load', function() {

    /**
     * 背景を生成する
     */
    var bg = new Map();
    bg.addEventListener('touchstart', function(e) {
      player.isMoving = true;
    }, false);
    bg.addEventListener('touchend', function(e) {
      player.isMoving = false;
    }, false);
    core.rootScene.addChild(bg);

    /**
     * プレイヤーを生成
     */
    var player = new Chara(0, 0, 16, 16 * 10);
    player.setSeed(2);
    player.toggleMoving(false);
    core.rootScene.addChild(player);

    /**
     * npcを作成
     */
    var npc = new Chara(192, 0, core.width - 64, 16 * 10);
    core.rootScene.addChild(npc);

    player.addEventListener('enterframe', function(e) {
      if(this.isMoving) {
        this.x += this.vx;
        this.frame = core.frame % 3 + 6;

        //見つかった時の処理
        if(npc.frame == 4) {
          this.x = 16;
          this.frame = 7;
        }
      }

      //クリア処理
      if (this.within(npc, 16)) {
        core.end(null, null, core.assets['img/clear.png']);
      }
    }, false);

    npc.addEventListener('enterframe', function(e) {
      if (rand(500) < 10) {
        this.frame = (this.frame == 7) ? 4 : 7
      }
    }, false);

    //経過時間ラベル
    var timeLabel = new TimeLabel(160, 0);
    core.rootScene.addChild(timeLabel);

  }, false);

  //ゲーム開始
  core.start();
});