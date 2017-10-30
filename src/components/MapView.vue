<template>
  <div class="mapview">
    <div class='sidemenu'>
       <side-menu></side-menu>
    </div>
    <div id = 'map'></div>
  </div>
</template>
<script>
import mapboxgl from "mapbox-gl";
import sideMenu from "@/components/SideMenu";
var WKT = require("terraformer-wkt-parser");
mapboxgl.accessToken =
  "pk.eyJ1IjoiYTIzMDYwNSIsImEiOiJjajY0Y3IxZXMxcml3MzNtb2JmbDgxaTlvIn0.h79V9gyHk0aHhgOGq42QQQ";
export default {
  components: {
    sideMenu
  },
  data() {
    return {
      map: null,
      pointsLayerId: "points"
    };
  },
  mounted() {
    this.mapInit();
  },
  methods: {
    mapInit() {
      this.map = new mapboxgl.Map({
        container: "map",
        //style: "http://192.168.34.203:32770/styles/klokantech-basic/style.json",
        style: "mapbox://styles/mapbox/streets-v9", // stylesheet location
        center: [-74.5, 40], // starting position [lng, lat]
        //center: [120.6583, 31.3032],
        zoom: 11
      });
      var _this = this;
      this.mapPointInit(this.map);
      this.mapLineInit(this.map);

      this.map.on("load", function() {
        _this.wktTest(_this.map);
        // _this.mapPolygonInit(_this.map);
        //  _this.map3DPolygonInit(_this.map);
      });
    },
    mapPointInit(map) {
      var _this = this;
      map.on("load", function() {
        map.addSource("pointsSource", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "Point",
                  //coordinates: [120.6583, 31.3032]
                  coordinates: [-74.5, 40]
                }
              }
            ]
          }
        });
        map.addLayer({
          id: "points",
          type: "circle",
          source: "pointsSource",
          paint: {
            "circle-radius": 10,
            "circle-color": "#007cbf"
          }
        });
        _this.mapClick(map, _this.pointsLayerId);
      });
    },
    mapLineInit(map) {
      map.on("load", function() {
        map.addSource("lineSource", {
          type: "geojson",
          data: {
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates: [
                [-74.5, 40],
                [-74.5, 41]
                // [120.6583, 31.3032],
                // [120.6883, 31.2032],
                // [120.6553, 31.1032]
              ]
            }
          }
        });
        map.addLayer({
          id: "line",
          type: "line",
          source: "lineSource",
          paint: {
            "line-color": "#888",
            "line-width": 8
          },
          layout: {
            "line-join": "round",
            "line-cap": "round"
          }
        });
      });
    },
    mapPolygonInit(map) {
      map.addSource("polygonSource", {
        type: "geojson",
        data: {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [120.6583, 31.2032],
                [120.6183, 31.2032],
                [120.6183, 31.2132],
                [120.6583, 31.2132],
                [120.6583, 31.2032]
              ]
            ]
          }
        }
      });
      map.addLayer({
        id: "polygon",
        type: "fill",
        source: "polygonSource",
        paint: {
          "fill-color": "#888",
          "fill-opacity": 0.8
        }
      });
    },
    mapClick(map, layerId) {
      map.on("click", layerId, function(e) {
        console.log(e);
        new mapboxgl.Popup()
          .setLngLat(e.features[0].geometry.coordinates)
          .setHTML("<a>" + e.features[0].geometry.coordinates + "</a>")
          .addTo(map);
        map.flyTo({
          center: e.features[0].geometry.coordinates
        });
      });
      map.on("mouseenter", layerId, function() {
        map.getCanvas().style.cursor = "pointer";
      });
      // Change it back to a pointer when it leaves.
      map.on("mouseleave", layerId, function() {
        map.getCanvas().style.cursor = "";
      });
    },
    map3DPolygonInit(map) {
      map.addSource("roomSource", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {
                level: 1,
                name: "Bird Exhibit",
                height: 100,
                base_height: 0,
                color: "orange"
              },
              geometry: {
                coordinates: [
                  [
                    [120.6543, 31.3032],
                    [120.6143, 31.3032],
                    [120.6143, 31.3132],
                    [120.6543, 31.3132],
                    [120.6543, 31.3032]
                  ]
                ],
                type: "Polygon"
              },
              id: "test1"
            },
            {
              type: "Feature",
              properties: {
                level: 1,
                name: "Bird Exhibit",
                height: 300,
                base_height: 100,
                color: "grey"
              },
              geometry: {
                coordinates: [
                  [
                    [120.6583, 31.3032],
                    [120.6183, 31.3032],
                    [120.6183, 31.3132],
                    [120.6583, 31.3132],
                    [120.6583, 31.3032]
                  ]
                ],
                type: "Polygon"
              },
              id: "test2"
            }
          ]
        }
      });
      map.addLayer({
        id: "room-extrusion",
        type: "fill-extrusion",
        source: "roomSource",
        paint: {
          // See the Mapbox Style Spec for details on property functions
          // https://www.mapbox.com/mapbox-gl-style-spec/#types-function
          "fill-extrusion-color": {
            // Get the fill-extrusion-color from the source 'color' property.
            property: "color",
            type: "identity"
          },
          "fill-extrusion-height": {
            // Get fill-extrusion-height from the source 'height' property.
            property: "height",
            type: "identity"
          },
          "fill-extrusion-base": {
            // Get fill-extrusion-base from the source 'base_height' property.
            property: "base_height",
            type: "identity"
          },
          // Make extrusions slightly opaque for see through indoor walls.
          "fill-extrusion-opacity": 0.5
        }
      });
    },
    wktTest(map) {
      var geojson = WKT.parse(
        "LINESTRING (-74.40 40, -74.40  40.1, -74.40  40.2)"
      );
      map.getSource("lineSource").setData(geojson);
      console.log(geojson);
      map.addSource("wkt", {
        type: "geojson",
        data: geojson
      });
      map.addLayer({
        id: "wkt",
        type: "line",
        source: "wkt",
        paint: {
          "line-color": "#888",
          "line-width": 8
        },
        layout: {
          "line-join": "round",
          "line-cap": "round"
        }
      });
    }
  }
};
</script>
<style>
.mapview {
  position: absolute;
  top: 61px;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 0;
}
.sidemenu {
  position: absolute;
  top: 0px;
  left: 0;
  bottom: 0;
  width: 350px;
  z-index: 1;
  background: white;
  box-shadow: 5px 5px 5px #888888;
}
#map {
  position: absolute;
  left: 350px;
  top: 0px;
  bottom: 0;
  right: 0;
  z-index: 0;
}
</style>
