page('/allocation', allocation);
page();

function allocation() {
    doAjax('NVR123', 'departureDate');
}

function doAjax(flightNumber, departureDate) {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/api/flight/' + flightNumber + '/' + departureDate + '/allocation',
        dataType: "json",
        success: null
    })
        .done(function (data) {
            printData(data);
        });
}

