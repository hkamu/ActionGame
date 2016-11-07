var res = {
   //背景系
   background_png:"res/background_back.png",
   light_png:"res/background_light_shafts.png",
   ground_png:"res/background_front.png",
   block_png:"res/block48X48.png",
   curtain:"res/curtainL.png",
   curtain2:"res/curtainR.png",
   tile:"res/block48X48.png",
   title_png:"res/title.png",
   ui_panels:"res/ui_panels.png",

   //ボタン系
   leftbutton_png: "res/leftbutton.png",
   rightbutton_png: "res/rightbutton.png",

   //フレーム系
   player_sheet:"res/sir_awesome_frames.png",
   player_plist:"res/player.plist",
   bat_frames:"res/bat_frames.png",
   slime_frames:"res/slime_green_frames.png",
   zombie_frames:"res/zombie_frames.png",
   zombie_plist:"res/zombie.plist",
   slime_green_frames:"res/slime_green_frames.png",
   slime_red_frames:"res/slime_red_frames.png",
   slime_green_plist:"res/slimegreen.plist",
   slime_red_plist:"res/slimered.plist",
   slime_yellow_plist:"res/slimeyellow.plist",
   coins_frames:"res/coins.png",
};

var g_resources = [];
for (var i in res) {
   g_resources.push(res[i]);
}
