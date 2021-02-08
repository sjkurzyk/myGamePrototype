gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDhighway_95holeObjects1= [];
gdjs.New_32sceneCode.GDhighway_95holeObjects2= [];
gdjs.New_32sceneCode.GDhighwayObjects1= [];
gdjs.New_32sceneCode.GDhighwayObjects2= [];
gdjs.New_32sceneCode.GDPlayerObjects1= [];
gdjs.New_32sceneCode.GDPlayerObjects2= [];
gdjs.New_32sceneCode.GDbuildings_95farObjects1= [];
gdjs.New_32sceneCode.GDbuildings_95farObjects2= [];
gdjs.New_32sceneCode.GDbuildings_95closeObjects1= [];
gdjs.New_32sceneCode.GDbuildings_95closeObjects2= [];
gdjs.New_32sceneCode.GDtreesObjects1= [];
gdjs.New_32sceneCode.GDtreesObjects2= [];
gdjs.New_32sceneCode.GDbackgroundObjects1= [];
gdjs.New_32sceneCode.GDbackgroundObjects2= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};


gdjs.New_32sceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDPlayerObjects1[k] = gdjs.New_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].setX(gdjs.New_32sceneCode.GDPlayerObjects1[i].getX() + (4));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("buildings_close"), gdjs.New_32sceneCode.GDbuildings_95closeObjects1);
gdjs.copyArray(runtimeScene.getObjects("buildings_far"), gdjs.New_32sceneCode.GDbuildings_95farObjects1);
gdjs.copyArray(runtimeScene.getObjects("highway"), gdjs.New_32sceneCode.GDhighwayObjects1);
gdjs.copyArray(runtimeScene.getObjects("highway_hole"), gdjs.New_32sceneCode.GDhighway_95holeObjects1);
gdjs.copyArray(runtimeScene.getObjects("trees"), gdjs.New_32sceneCode.GDtreesObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDhighwayObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDhighwayObjects1[i].setX(gdjs.New_32sceneCode.GDhighwayObjects1[i].getX() - (4));
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDhighway_95holeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDhighway_95holeObjects1[i].setX(gdjs.New_32sceneCode.GDhighway_95holeObjects1[i].getX() - (4));
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDtreesObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDtreesObjects1[i].setX(gdjs.New_32sceneCode.GDtreesObjects1[i].getX() - (4));
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDbuildings_95closeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDbuildings_95closeObjects1[i].setX(gdjs.New_32sceneCode.GDbuildings_95closeObjects1[i].getX() - (0.5));
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDbuildings_95farObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDbuildings_95farObjects1[i].setX(gdjs.New_32sceneCode.GDbuildings_95farObjects1[i].getX() - (0.1));
}
}}

}


};

gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDhighway_95holeObjects1.length = 0;
gdjs.New_32sceneCode.GDhighway_95holeObjects2.length = 0;
gdjs.New_32sceneCode.GDhighwayObjects1.length = 0;
gdjs.New_32sceneCode.GDhighwayObjects2.length = 0;
gdjs.New_32sceneCode.GDPlayerObjects1.length = 0;
gdjs.New_32sceneCode.GDPlayerObjects2.length = 0;
gdjs.New_32sceneCode.GDbuildings_95farObjects1.length = 0;
gdjs.New_32sceneCode.GDbuildings_95farObjects2.length = 0;
gdjs.New_32sceneCode.GDbuildings_95closeObjects1.length = 0;
gdjs.New_32sceneCode.GDbuildings_95closeObjects2.length = 0;
gdjs.New_32sceneCode.GDtreesObjects1.length = 0;
gdjs.New_32sceneCode.GDtreesObjects2.length = 0;
gdjs.New_32sceneCode.GDbackgroundObjects1.length = 0;
gdjs.New_32sceneCode.GDbackgroundObjects2.length = 0;

gdjs.New_32sceneCode.eventsList0(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
