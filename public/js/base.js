const MAP_PATH = "/map/"
const TERRAIN_PATH = "/terrain/"
const terrainProviderTemp = new Cesium.CesiumTerrainProvider({
    url: TERRAIN_PATH,
})

const imageryProvider = new Cesium.TileMapServiceImageryProvider({
    url : MAP_PATH,
    fileExtension: 'jpg',
});

let viewer = new Cesium.Viewer('cesiumContainer', {
    shouldAnimate: true,
    imageryProvider: imageryProvider,
    terrainProvider: terrainProviderTemp,
});
