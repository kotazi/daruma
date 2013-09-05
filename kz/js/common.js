
define(['enchant', 'nineleap', 'ui'], function(enchant) {

  enchant();

  var core = new Core(320, 320);
  core.fps = 16;
  core.preload('img/chara0.png', 'img/map2.png', 'img/clear.png');


  return core;

});





