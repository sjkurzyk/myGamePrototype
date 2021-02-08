gdjs.GameCode = {};
gdjs.GameCode.GDhighway_95holeObjects1= [];
gdjs.GameCode.GDhighway_95holeObjects2= [];
gdjs.GameCode.GDhighway_95holeObjects3= [];
gdjs.GameCode.GDhighwayObjects1= [];
gdjs.GameCode.GDhighwayObjects2= [];
gdjs.GameCode.GDhighwayObjects3= [];
gdjs.GameCode.GDPlayerObjects1= [];
gdjs.GameCode.GDPlayerObjects2= [];
gdjs.GameCode.GDPlayerObjects3= [];
gdjs.GameCode.GDbuildings_95farObjects1= [];
gdjs.GameCode.GDbuildings_95farObjects2= [];
gdjs.GameCode.GDbuildings_95farObjects3= [];
gdjs.GameCode.GDbuildings_95closeObjects1= [];
gdjs.GameCode.GDbuildings_95closeObjects2= [];
gdjs.GameCode.GDbuildings_95closeObjects3= [];
gdjs.GameCode.GDtrees_95foregroundObjects1= [];
gdjs.GameCode.GDtrees_95foregroundObjects2= [];
gdjs.GameCode.GDtrees_95foregroundObjects3= [];
gdjs.GameCode.GDtreesObjects1= [];
gdjs.GameCode.GDtreesObjects2= [];
gdjs.GameCode.GDtreesObjects3= [];
gdjs.GameCode.GDbackgroundObjects1= [];
gdjs.GameCode.GDbackgroundObjects2= [];
gdjs.GameCode.GDbackgroundObjects3= [];
gdjs.GameCode.GDcontrolsObjects1= [];
gdjs.GameCode.GDcontrolsObjects2= [];
gdjs.GameCode.GDcontrolsObjects3= [];
gdjs.GameCode.GDmainMenuButtonObjects1= [];
gdjs.GameCode.GDmainMenuButtonObjects2= [];
gdjs.GameCode.GDmainMenuButtonObjects3= [];
gdjs.GameCode.GDobscureGameObjects1= [];
gdjs.GameCode.GDobscureGameObjects2= [];
gdjs.GameCode.GDobscureGameObjects3= [];
gdjs.GameCode.GDmainMenuPauseButtonObjects1= [];
gdjs.GameCode.GDmainMenuPauseButtonObjects2= [];
gdjs.GameCode.GDmainMenuPauseButtonObjects3= [];
gdjs.GameCode.GDresumeButtonObjects1= [];
gdjs.GameCode.GDresumeButtonObjects2= [];
gdjs.GameCode.GDresumeButtonObjects3= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};
gdjs.GameCode.condition3IsTrue_0 = {val:false};
gdjs.GameCode.conditionTrue_1 = {val:false};
gdjs.GameCode.condition0IsTrue_1 = {val:false};
gdjs.GameCode.condition1IsTrue_1 = {val:false};
gdjs.GameCode.condition2IsTrue_1 = {val:false};
gdjs.GameCode.condition3IsTrue_1 = {val:false};


gdjs.GameCode.eventsList0 = function(runtimeScene) {

{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("musicFlag")) == 1;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("muteFlag")) == 1;
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 1);
}{runtimeScene.getVariables().get("musicFlag").setNumber(0);
}{runtimeScene.getVariables().get("muteFlag").setNumber(0);
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("musicFlag")) == 0;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("muteFlag")) == 1;
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
}{runtimeScene.getVariables().get("musicFlag").setNumber(1);
}{runtimeScene.getVariables().get("muteFlag").setNumber(0);
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDmainMenuButtonObjects1Objects = Hashtable.newFrom({"mainMenuButton": gdjs.GameCode.GDmainMenuButtonObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDresumeButtonObjects1Objects = Hashtable.newFrom({"resumeButton": gdjs.GameCode.GDresumeButtonObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDmainMenuPauseButtonObjects1Objects = Hashtable.newFrom({"mainMenuPauseButton": gdjs.GameCode.GDmainMenuPauseButtonObjects1});gdjs.GameCode.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("buildings_close"), gdjs.GameCode.GDbuildings_95closeObjects1);
gdjs.copyArray(runtimeScene.getObjects("buildings_far"), gdjs.GameCode.GDbuildings_95farObjects1);
gdjs.copyArray(runtimeScene.getObjects("mainMenuPauseButton"), gdjs.GameCode.GDmainMenuPauseButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("obscureGame"), gdjs.GameCode.GDobscureGameObjects1);
gdjs.copyArray(runtimeScene.getObjects("resumeButton"), gdjs.GameCode.GDresumeButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("trees"), gdjs.GameCode.GDtreesObjects1);
gdjs.copyArray(runtimeScene.getObjects("trees_foreground"), gdjs.GameCode.GDtrees_95foregroundObjects1);
{runtimeScene.getVariables().get("speed").setNumber(5);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "assets\\Race-to-Mars.ogg", 1, true, 5, 1);
}{runtimeScene.getVariables().get("musicFlag").setNumber(1);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(5);
}{runtimeScene.getVariables().getFromIndex(4).setNumber(40);
}{runtimeScene.getVariables().getFromIndex(3).setNumber(8);
}{runtimeScene.getVariables().getFromIndex(1).setNumber(1.1);
}{runtimeScene.getVariables().getFromIndex(2).setNumber(0.9);
}{for(var i = 0, len = gdjs.GameCode.GDtrees_95foregroundObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDtrees_95foregroundObjects1[i].setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + 96);
}
}{for(var i = 0, len = gdjs.GameCode.GDtreesObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDtreesObjects1[i].setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + 96);
}
}{for(var i = 0, len = gdjs.GameCode.GDbuildings_95closeObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDbuildings_95closeObjects1[i].setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + 224);
}
}{for(var i = 0, len = gdjs.GameCode.GDbuildings_95farObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDbuildings_95farObjects1[i].setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + 48);
}
}{runtimeScene.getVariables().getFromIndex(5).setNumber(0);
}{for(var i = 0, len = gdjs.GameCode.GDobscureGameObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDobscureGameObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDmainMenuPauseButtonObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDmainMenuPauseButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDresumeButtonObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDresumeButtonObjects1[i].hide();
}
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 0;
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setAnimation(1);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects1[k] = gdjs.GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects1.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 0;
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setX(gdjs.GameCode.GDPlayerObjects1[i].getX() + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("speed"))));
}
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 0;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("buildings_close"), gdjs.GameCode.GDbuildings_95closeObjects1);
gdjs.copyArray(runtimeScene.getObjects("buildings_far"), gdjs.GameCode.GDbuildings_95farObjects1);
gdjs.copyArray(runtimeScene.getObjects("highway"), gdjs.GameCode.GDhighwayObjects1);
gdjs.copyArray(runtimeScene.getObjects("highway_hole"), gdjs.GameCode.GDhighway_95holeObjects1);
gdjs.copyArray(runtimeScene.getObjects("trees"), gdjs.GameCode.GDtreesObjects1);
gdjs.copyArray(runtimeScene.getObjects("trees_foreground"), gdjs.GameCode.GDtrees_95foregroundObjects1);
{for(var i = 0, len = gdjs.GameCode.GDhighwayObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDhighwayObjects1[i].setX(gdjs.GameCode.GDhighwayObjects1[i].getX() - (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("speed"))));
}
}{for(var i = 0, len = gdjs.GameCode.GDhighway_95holeObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDhighway_95holeObjects1[i].setX(gdjs.GameCode.GDhighway_95holeObjects1[i].getX() - (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("speed"))));
}
}{for(var i = 0, len = gdjs.GameCode.GDtreesObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDtreesObjects1[i].setX(gdjs.GameCode.GDtreesObjects1[i].getX() - (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) / gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1))));
}
}{for(var i = 0, len = gdjs.GameCode.GDbuildings_95closeObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDbuildings_95closeObjects1[i].setX(gdjs.GameCode.GDbuildings_95closeObjects1[i].getX() - (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) / gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3))));
}
}{for(var i = 0, len = gdjs.GameCode.GDbuildings_95farObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDbuildings_95farObjects1[i].setX(gdjs.GameCode.GDbuildings_95farObjects1[i].getX() - (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) / gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4))));
}
}{for(var i = 0, len = gdjs.GameCode.GDtrees_95foregroundObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDtrees_95foregroundObjects1[i].setX(gdjs.GameCode.GDtrees_95foregroundObjects1[i].getX() - (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) / gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("trees"), gdjs.GameCode.GDtreesObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDtreesObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDtreesObjects1[i].getX() <= -(96) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDtreesObjects1[k] = gdjs.GameCode.GDtreesObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDtreesObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDtreesObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDtreesObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDtreesObjects1[i].setX(gdjs.GameCode.GDtreesObjects1[i].getX() + (96));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("trees_foreground"), gdjs.GameCode.GDtrees_95foregroundObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDtrees_95foregroundObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDtrees_95foregroundObjects1[i].getX() <= -(96) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDtrees_95foregroundObjects1[k] = gdjs.GameCode.GDtrees_95foregroundObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDtrees_95foregroundObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDtrees_95foregroundObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDtrees_95foregroundObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDtrees_95foregroundObjects1[i].setX(gdjs.GameCode.GDtrees_95foregroundObjects1[i].getX() + (96));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("buildings_close"), gdjs.GameCode.GDbuildings_95closeObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbuildings_95closeObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDbuildings_95closeObjects1[i].getX() <= -(224) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDbuildings_95closeObjects1[k] = gdjs.GameCode.GDbuildings_95closeObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDbuildings_95closeObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDbuildings_95closeObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDbuildings_95closeObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDbuildings_95closeObjects1[i].setX(gdjs.GameCode.GDbuildings_95closeObjects1[i].getX() + (224));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("buildings_far"), gdjs.GameCode.GDbuildings_95farObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbuildings_95farObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDbuildings_95farObjects1[i].getX() <= -(48) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDbuildings_95farObjects1[k] = gdjs.GameCode.GDbuildings_95farObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDbuildings_95farObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDbuildings_95farObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDbuildings_95farObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDbuildings_95farObjects1[i].setX(gdjs.GameCode.GDbuildings_95farObjects1[i].getX() + (48));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("highway"), gdjs.GameCode.GDhighwayObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDhighwayObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDhighwayObjects1[i].getX() == -((gdjs.GameCode.GDhighwayObjects1[i].getWidth())) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDhighwayObjects1[k] = gdjs.GameCode.GDhighwayObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDhighwayObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDhighwayObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDhighwayObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDhighwayObjects1[i].setX(750);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "m");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7349724);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("muteFlag").setNumber(1);
}
{ //Subevents
gdjs.GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainMenuButton"), gdjs.GameCode.GDmainMenuButtonObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDmainMenuButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
gdjs.GameCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 0;
}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", true);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "p");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(5).setNumber(1);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(5).setNumber(1);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 1;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("mainMenuPauseButton"), gdjs.GameCode.GDmainMenuPauseButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("obscureGame"), gdjs.GameCode.GDobscureGameObjects1);
gdjs.copyArray(runtimeScene.getObjects("resumeButton"), gdjs.GameCode.GDresumeButtonObjects1);
{for(var i = 0, len = gdjs.GameCode.GDobscureGameObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDobscureGameObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.GameCode.GDmainMenuPauseButtonObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDmainMenuPauseButtonObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.GameCode.GDresumeButtonObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDresumeButtonObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].pauseAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("resumeButton"), gdjs.GameCode.GDresumeButtonObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 1;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDresumeButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
gdjs.GameCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("mainMenuPauseButton"), gdjs.GameCode.GDmainMenuPauseButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("obscureGame"), gdjs.GameCode.GDobscureGameObjects1);
/* Reuse gdjs.GameCode.GDresumeButtonObjects1 */
{runtimeScene.getVariables().getFromIndex(5).setNumber(0);
}{for(var i = 0, len = gdjs.GameCode.GDobscureGameObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDobscureGameObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDmainMenuPauseButtonObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDmainMenuPauseButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDresumeButtonObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDresumeButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].playAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainMenuPauseButton"), gdjs.GameCode.GDmainMenuPauseButtonObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 1;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDmainMenuPauseButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
gdjs.GameCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(5).setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDhighway_95holeObjects1.length = 0;
gdjs.GameCode.GDhighway_95holeObjects2.length = 0;
gdjs.GameCode.GDhighway_95holeObjects3.length = 0;
gdjs.GameCode.GDhighwayObjects1.length = 0;
gdjs.GameCode.GDhighwayObjects2.length = 0;
gdjs.GameCode.GDhighwayObjects3.length = 0;
gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects3.length = 0;
gdjs.GameCode.GDbuildings_95farObjects1.length = 0;
gdjs.GameCode.GDbuildings_95farObjects2.length = 0;
gdjs.GameCode.GDbuildings_95farObjects3.length = 0;
gdjs.GameCode.GDbuildings_95closeObjects1.length = 0;
gdjs.GameCode.GDbuildings_95closeObjects2.length = 0;
gdjs.GameCode.GDbuildings_95closeObjects3.length = 0;
gdjs.GameCode.GDtrees_95foregroundObjects1.length = 0;
gdjs.GameCode.GDtrees_95foregroundObjects2.length = 0;
gdjs.GameCode.GDtrees_95foregroundObjects3.length = 0;
gdjs.GameCode.GDtreesObjects1.length = 0;
gdjs.GameCode.GDtreesObjects2.length = 0;
gdjs.GameCode.GDtreesObjects3.length = 0;
gdjs.GameCode.GDbackgroundObjects1.length = 0;
gdjs.GameCode.GDbackgroundObjects2.length = 0;
gdjs.GameCode.GDbackgroundObjects3.length = 0;
gdjs.GameCode.GDcontrolsObjects1.length = 0;
gdjs.GameCode.GDcontrolsObjects2.length = 0;
gdjs.GameCode.GDcontrolsObjects3.length = 0;
gdjs.GameCode.GDmainMenuButtonObjects1.length = 0;
gdjs.GameCode.GDmainMenuButtonObjects2.length = 0;
gdjs.GameCode.GDmainMenuButtonObjects3.length = 0;
gdjs.GameCode.GDobscureGameObjects1.length = 0;
gdjs.GameCode.GDobscureGameObjects2.length = 0;
gdjs.GameCode.GDobscureGameObjects3.length = 0;
gdjs.GameCode.GDmainMenuPauseButtonObjects1.length = 0;
gdjs.GameCode.GDmainMenuPauseButtonObjects2.length = 0;
gdjs.GameCode.GDmainMenuPauseButtonObjects3.length = 0;
gdjs.GameCode.GDresumeButtonObjects1.length = 0;
gdjs.GameCode.GDresumeButtonObjects2.length = 0;
gdjs.GameCode.GDresumeButtonObjects3.length = 0;

gdjs.GameCode.eventsList1(runtimeScene);
return;

}

gdjs['GameCode'] = gdjs.GameCode;
