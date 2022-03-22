$(document).ready(function() {
    $.getJSON('data.json', data => {
        for (let i = 0; i < data.length; i++) {
            let name  = data[i].name;
            let des = data[i].description;
            let location = data[i].location;
            $('#table').append('<tr>' +
                '<td>' + name + '</td>' +
                '<td>' + des + '</td>' +
                '<td>' + location[0] + ', ' + location[1] + '</td></tr>' );
        }
    });
    
});
