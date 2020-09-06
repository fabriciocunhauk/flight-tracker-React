const express = require('express');
const https = require('https');
const app = express();
const port = 3000;

var fs = require('fs');

var qs = require('querystring');

var options = {
    'method': 'GET',
    'hostname': 'test.api.amadeus.com',
    'path': '/v1/shopping/flight-destinations?origin=PAR&maxPrice=200',
    'headers': {
        'Authorization': 'Bearer QAwwRrxHKzGiU1yr1OGjPD4AxY7q',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': 'visid_incap_2137601=293/kLe1SMCrQn9j66hxD3joUl8AAAAAQUIPAAAAAADkfLboxFe8MtlaoOB4MF6T'
    },
    'maxRedirects': 20
};

app.get("/", (req, res) => {

    https.get(options, function (response) {
        var data = [];

        response.on("data", function (data) {
            const flightData = JSON.parse(data)
            const { type, origin, destination } = flightData.data[0]
            res.send("<h1>" + type + " " + origin + " " + destination + "<h1>");
        });

        response.on("end", function (chunk) {
            var body = Buffer.concat(data);
            console.log(body.toString());
        });

        response.on("error", function (error) {
            console.error(error);
        });
    });


});


app.listen(port, () => {
    console.log('Server conected on port 3000');
})