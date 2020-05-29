const options = {
  // Required: API key
  key: 'a3rkhckri6sg1WBBdaUKlNU1WrRccFaG', // REPLACE WITH YOUR KEY !!!

  // Put additional console output
  verbose: true,

  // Optional: Initial state of the map
  lat: 52.2,
  lon: 21,
  zoom: 6,
};

// Initialize Windy API
// eslint-disable-next-line no-undef
windyInit(options, (windyAPI) => {
  // windyAPI is ready, and contain 'map', 'store',
  // 'picker' and other usefull stuff

  const {
    map,
  } = windyAPI;
  // .map is instance of Leaflet map

  L.popup()
    .setLatLng([52.229676, 21.012229])
    .setContent('Warszawa')
    .openOn(map);
});
