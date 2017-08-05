var noditor = require('noditor');
var express = require('express');

// Express
var app = express();

// Add the endpoint needed by the Noditor Mobile App
app.get('/noditor/:path/:passcode/:command', noditor.commands);

// Start Express
app.listen(8080, function () {
    console.log('Server > '+app.name+' started @'+new Date());
    var options = {"quiet":false};
    noditor.start(options);
});
