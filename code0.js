gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.GDbackgroundObjects1= [];
gdjs.Main_32MenuCode.GDbackgroundObjects2= [];
gdjs.Main_32MenuCode.GDcreditsButtonObjects1= [];
gdjs.Main_32MenuCode.GDcreditsButtonObjects2= [];
gdjs.Main_32MenuCode.GDsettingsButtonObjects1= [];
gdjs.Main_32MenuCode.GDsettingsButtonObjects2= [];
gdjs.Main_32MenuCode.GDplayButtonObjects1= [];
gdjs.Main_32MenuCode.GDplayButtonObjects2= [];

gdjs.Main_32MenuCode.conditionTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition0IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition1IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition2IsTrue_0 = {val:false};


gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDplayButtonObjects1Objects = Hashtable.newFrom({"playButton": gdjs.Main_32MenuCode.GDplayButtonObjects1});gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDsettingsButtonObjects1Objects = Hashtable.newFrom({"settingsButton": gdjs.Main_32MenuCode.GDsettingsButtonObjects1});gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDcreditsButtonObjects1Objects = Hashtable.newFrom({"creditsButton": gdjs.Main_32MenuCode.GDcreditsButtonObjects1});gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("playButton"), gdjs.Main_32MenuCode.GDplayButtonObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDplayButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("settingsButton"), gdjs.Main_32MenuCode.GDsettingsButtonObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDsettingsButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Settings", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("creditsButton"), gdjs.Main_32MenuCode.GDcreditsButtonObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDcreditsButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Credits", true);
}}

}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDbackgroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDbackgroundObjects2.length = 0;
gdjs.Main_32MenuCode.GDcreditsButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDcreditsButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDsettingsButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDsettingsButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDplayButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDplayButtonObjects2.length = 0;

gdjs.Main_32MenuCode.eventsList0(runtimeScene);
return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
