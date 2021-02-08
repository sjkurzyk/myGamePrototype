gdjs.GameCode = {};
gdjs.GameCode.GDhighway_95holeObjects1= [];
gdjs.GameCode.GDhighway_95holeObjects2= [];
gdjs.GameCode.GDhighwayObjects1= [];
gdjs.GameCode.GDhighwayObjects2= [];
gdjs.GameCode.GDPlayerObjects1= [];
gdjs.GameCode.GDPlayerObjects2= [];
gdjs.GameCode.GDbuildings_95farObjects1= [];
gdjs.GameCode.GDbuildings_95farObjects2= [];
gdjs.GameCode.GDbuildings_95closeObjects1= [];
gdjs.GameCode.GDbuildings_95closeObjects2= [];
gdjs.GameCode.GDtreesObjects1= [];
gdjs.GameCode.GDtreesObjects2= [];
gdjs.GameCode.GDbackgroundObjects1= [];
gdjs.GameCode.GDbackgroundObjects2= [];
gdjs.GameCode.GDfloor_95despawnerObjects1= [];
gdjs.GameCode.GDfloor_95despawnerObjects2= [];
gdjs.GameCode.GDfloor_95spawnerObjects1= [];
gdjs.GameCode.GDfloor_95spawnerObjects2= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};
gdjs.GameCode.conditionTrue_1 = {val:false};
gdjs.GameCode.condition0IsTrue_1 = {val:false};
gdjs.GameCode.condition1IsTrue_1 = {val:false};
gdjs.GameCode.condition2IsTrue_1 = {val:false};


gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("speed").setNumber(4);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "difficultyTimer");
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "s-highway.mp3", 1, true, 20, 1);
}{runtimeScene.getVariables().get("musicFlag").setNumber(1);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = (gdjs.evtTools.common.mod(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene), 2) == 0);
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("speed").add(1);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
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

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects1[k] = gdjs.GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
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


{
gdjs.copyArray(runtimeScene.getObjects("buildings_close"), gdjs.GameCode.GDbuildings_95closeObjects1);
gdjs.copyArray(runtimeScene.getObjects("buildings_far"), gdjs.GameCode.GDbuildings_95farObjects1);
gdjs.copyArray(runtimeScene.getObjects("highway"), gdjs.GameCode.GDhighwayObjects1);
gdjs.copyArray(runtimeScene.getObjects("highway_hole"), gdjs.GameCode.GDhighway_95holeObjects1);
gdjs.copyArray(runtimeScene.getObjects("trees"), gdjs.GameCode.GDtreesObjects1);
{for(var i = 0, len = gdjs.GameCode.GDhighwayObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDhighwayObjects1[i].setX(gdjs.GameCode.GDhighwayObjects1[i].getX() - (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("speed"))));
}
}{for(var i = 0, len = gdjs.GameCode.GDhighway_95holeObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDhighway_95holeObjects1[i].setX(gdjs.GameCode.GDhighway_95holeObjects1[i].getX() - (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("speed"))));
}
}{for(var i = 0, len = gdjs.GameCode.GDtreesObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDtreesObjects1[i].setX(gdjs.GameCode.GDtreesObjects1[i].getX() - (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("speed"))));
}
}{for(var i = 0, len = gdjs.GameCode.GDbuildings_95closeObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDbuildings_95closeObjects1[i].setX(gdjs.GameCode.GDbuildings_95closeObjects1[i].getX() - (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("speed")) / 8));
}
}{for(var i = 0, len = gdjs.GameCode.GDbuildings_95farObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDbuildings_95farObjects1[i].setX(gdjs.GameCode.GDbuildings_95farObjects1[i].getX() - (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("speed")) / 40));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("buildings_far"), gdjs.GameCode.GDbuildings_95farObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbuildings_95farObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDbuildings_95farObjects1[i].getX() < -(256) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDbuildings_95farObjects1[k] = gdjs.GameCode.GDbuildings_95farObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDbuildings_95farObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDbuildings_95farObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDbuildings_95farObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDbuildings_95farObjects1[i].setX(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("buildings_close"), gdjs.GameCode.GDbuildings_95closeObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbuildings_95closeObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDbuildings_95closeObjects1[i].getX() < -(256) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDbuildings_95closeObjects1[k] = gdjs.GameCode.GDbuildings_95closeObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDbuildings_95closeObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDbuildings_95closeObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDbuildings_95closeObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDbuildings_95closeObjects1[i].setX(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("trees"), gdjs.GameCode.GDtreesObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDtreesObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDtreesObjects1[i].getX() < -(256) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDtreesObjects1[k] = gdjs.GameCode.GDtreesObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDtreesObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDtreesObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDtreesObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDtreesObjects1[i].setX(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("floor_despawner"), gdjs.GameCode.GDfloor_95despawnerObjects1);
gdjs.copyArray(runtimeScene.getObjects("highway"), gdjs.GameCode.GDhighwayObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDhighwayObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDhighwayObjects1[i].getX() < (( gdjs.GameCode.GDfloor_95despawnerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDfloor_95despawnerObjects1[0].getX()) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDhighwayObjects1[k] = gdjs.GameCode.GDhighwayObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDhighwayObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("floor_spawner"), gdjs.GameCode.GDfloor_95spawnerObjects1);
/* Reuse gdjs.GameCode.GDhighwayObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDhighwayObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDhighwayObjects1[i].setX((( gdjs.GameCode.GDfloor_95spawnerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDfloor_95spawnerObjects1[0].getX()));
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("musicFlag")) == 1;
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 1);
}{runtimeScene.getVariables().get("musicFlag").setNumber(0);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("musicFlag")) == 0;
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
}{runtimeScene.getVariables().get("musicFlag").setNumber(1);
}}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDhighway_95holeObjects1.length = 0;
gdjs.GameCode.GDhighway_95holeObjects2.length = 0;
gdjs.GameCode.GDhighwayObjects1.length = 0;
gdjs.GameCode.GDhighwayObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDbuildings_95farObjects1.length = 0;
gdjs.GameCode.GDbuildings_95farObjects2.length = 0;
gdjs.GameCode.GDbuildings_95closeObjects1.length = 0;
gdjs.GameCode.GDbuildings_95closeObjects2.length = 0;
gdjs.GameCode.GDtreesObjects1.length = 0;
gdjs.GameCode.GDtreesObjects2.length = 0;
gdjs.GameCode.GDbackgroundObjects1.length = 0;
gdjs.GameCode.GDbackgroundObjects2.length = 0;
gdjs.GameCode.GDfloor_95despawnerObjects1.length = 0;
gdjs.GameCode.GDfloor_95despawnerObjects2.length = 0;
gdjs.GameCode.GDfloor_95spawnerObjects1.length = 0;
gdjs.GameCode.GDfloor_95spawnerObjects2.length = 0;

gdjs.GameCode.eventsList0(runtimeScene);
return;

}

gdjs['GameCode'] = gdjs.GameCode;
