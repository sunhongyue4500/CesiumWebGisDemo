const MAP_PATH = "/map/"
const TERRAIN_PATH = "/terrain/"
const terrainProviderTemp = new Cesium.CesiumTerrainProvider({
    url: TERRAIN_PATH
})
// test
let viewer = new Cesium.Viewer('cesiumContainer', {
    shouldAnimate: true,
    imageryProvider: Cesium.createTileMapServiceImageryProvider({
        url: Cesium.buildModuleUrl(MAP_PATH)
    }),
    terrainProvider: terrainProviderTemp,
});

