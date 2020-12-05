
var map2 = L.map('map2').setView([28.412740, -82.697395], 5.51);

L.tileLayer('https://api.mapbox.com/styles/v1/aprilrubin/ckiaz0gqc08qx19l1xsla1epq/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYXByaWxydWJpbiIsImEiOiJja2lhZ3VrNTkwYjRiMndzMzhiZ3ZmcjZnIn0.L33FaG6wsjHri5eEhEUE6w', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
}).addTo(map2);

for (let i=0; i < places.length; i++) {
  L.marker( [places[i].latitude, places[i].longitude] )
  .bindPopup( '<h3>' + places[i].newspaper + '</h3>' + '<p>' + places[i].description + '</p>')
  .addTo(map2);
}
