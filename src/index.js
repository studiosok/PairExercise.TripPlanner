console.log('In index.js');


import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoic3R1ZGlvc28iLCJhIjoiY2trZThrZ216MDYzdjJ2cDh1cG10amxxNSJ9.UHcctOhtdtabfswA6uIHuQ';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
});
