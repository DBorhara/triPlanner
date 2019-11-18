const mapboxgl = require("mapbox-gl");
const markerPick = require("./marker");
// var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1IjoiZXlhbmciLCJhIjoiY2szNG50cTFmMHoxejNnb2J0OW1iOHR3dyJ9.srl9qhXcwMID__0wJEnOFg';
const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/dark-v10" // mapbox has lots of different map styles available.
});

const marker = markerPick('hotel', [-74.009151, 40.705086]);
marker.addTo(map);

// const markerDomEl = document.createElement("div"); // Create a new, detached DIV
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// const marker = new mapboxgl.Marker(markerDomEl).setLngLat([-74.009151, 40.705086]).addTo(map);

module.exports = { map };
