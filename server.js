var noditor = require('noditor');
var express = require('express');
var app = express();


app.get('/noditor/:passcode/:command', noditor.commands);

app.listen(8080, function () {
    console.log('Server > '+app.name+' started @'+new Date());
    var options = {"quiet":false};
    noditor.start(options);
});
