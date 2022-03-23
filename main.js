let locationsArr = [];
$(document).ready(function() {
    $.getJSON('data.json', data => {
        for (let i = 0; i < data.length; i++) {
            let name  = data[i].name;
            let location = data[i].location;
            let description = data[i].description;
            locationsArr.push(data[i].location);
            $('#table').append('<tr>' +
                '<td>' + name + '</td>' +
                '<td>' + description + '</td>' +
                '<td>' + '<a href="https://www.google.com/maps?q=' + location[0] + ',' + location[1] + '">Google Map</a></td></tr>' );
        }
    });
});

const loadMap = () => {
    let map = new google.maps.Map(document.getElementById('map'), {
        center: new google.maps.LatLng(32.834686, -117.130775),
        zoom: 9.5,
        mapTypeId: google.maps.MapTypeId.SATELITE
    });
    for (let i = 0; i < locationsArr.length; i++) {
        console.log(locationsArr)
        let marker = new google.maps.Marker({
            position: new google.maps.LatLng(locationsArr[0], locationsArr[1]),
            map: map,
            animation: google.maps.Animation.Drop
        });
    }
}
google.maps.event.addDomListener(window, 'load', loadMap());
