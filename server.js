/**
 * Created by Stanislas on 12/12/16.
 */
var express = require('express');
var app = express();
var fs = require("fs");


app.post('/barycentre', function (req, res) {
    var data={latitude:'latitude',longitude:'longitude'};
    console.log( data );
    res.end( JSON.stringify(data) );

})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("App listening at http://%s:%s", host, port)

})
