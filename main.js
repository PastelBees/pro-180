let latitude, longitude, destination;

$(document).ready(function () {
	alert("Please allow the device to know your location!")
	initGeolocation();
})

function initGeolocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(success);
	}
	else {
		alert("Sorry, your browser does not support geolocation services.");
	}
}

$(function () {
	$("#navigate-button").click(function () {
		window.location.href = `ar_weather.html?source=${latitude};${longitude}&destination=${destination[1]};${destination[0]}`
	})
})

function success(position){
    longitude = position.coords.longitude;
    latitude = position.coords.latitude

    //initializing mapbox
    mapboxgl.accessToken = "pk.eyJ1IjoibG93ZW5lcmd5IiwiYSI6ImNrejR2bWdyNTBrcGUyb3R2ZDhwaXg5cXEifQ.2_62iGSwzz-D1mmO-xcedw";

    var map = new mapboxgl.Map({
        container: "map",
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [longitude, latitude],
        zoom: 4
    })


	map.addControl(
		new MapboxGeocoder({
			accessToken: mapboxgl.accessToken,
			mapboxgl: mapboxgl
		}).on('result', function (e) {
			destination = e.result.center
		})
	);

    var img1 = document.querySelector("#amber")
    var img2 = document.querySelector("#gateway")
    var img3 = document.querySelector("#gate")
    var img4 = document.querySelector("#lotus")
    var img5 = document.querySelector("#victoria")

    var marker1 = new mapboxgl.Marker({
        element: img1
    })
    .setLngLat([75.85133, 26.98547])
    .addTo(map);

    var marker2 = new mapboxgl.Marker({
        element: img2
    })
    .setLngLat([72.83452, 18.92289]) 
    .addTo(map);

    var marker3 = new mapboxgl.Marker({
        element: img3
    })
    .setLngLat([77.16253, 29.42099])
    .addTo(map);

    var marker4 = new mapboxgl.Marker({
        element: img4
    })
    .setLngLat([77.25984, 28.55695])
    .addTo(map);

    var marker5 = new mapboxgl.Marker({
        element: img5
    })
    .setLngLat([88.37045, 22.79898])
    .addTo(map);
}