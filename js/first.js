var map = L.map('map').setView([25.651645, -80.328150], 11.9);

L.tileLayer('https://api.mapbox.com/styles/v1/aprilrubin/ckiahv77v0jz919phtwk4j9se/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYXByaWxydWJpbiIsImEiOiJja2lhZ3VrNTkwYjRiMndzMzhiZ3ZmcjZnIn0.L33FaG6wsjHri5eEhEUE6w', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
}).addTo(map);

var marker1 = L.marker([25.614443966457817, -80.30876476744145]).addTo(map);
marker1.bindPopup("This is Deering Estate.");

var marker2 = L.marker([25.631506291372226, -80.3202962060654]).addTo(map);
marker2.bindPopup("This is Coral Reef Park.");

var marker3 = L.marker([25.679392059772205, -80.25653812934472]).addTo(map);
marker3.bindPopup("This is Matheson Hammock Park.");

var marker4 = L.marker([25.654304367018536, -80.32738837537705]).addTo(map);
marker4.bindPopup("This is Evelyn Greer Park.");
