// creating map on leaflet based on carto tilemap
// copyright goes to carto and leaflet creators

export async function createMap(api) {
  const apiLatitude = api.location.latitude;
  const apiLongitude = api.location.longitude;

  const map = L.map('map', {
    center: [parseFloat(apiLatitude), parseFloat(apiLongitude)],
    zoom: 16
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/{style}/{z}/{x}/{y}{scale}.png', {
    attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    style: 'white_all',
    scale: '@3x'
  }).addTo(map);

  L.marker([parseFloat(apiLatitude), parseFloat(apiLongitude)]).addTo(map).openPopup();
}
