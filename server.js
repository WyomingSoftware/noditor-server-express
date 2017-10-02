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

// Place a load on the server
setInterval(function(){ loadMemory(Math.floor((Math.random() * 500000) + 20000)); }, 5000);
var arr;
var txt = 'This is meant to be a long string to place a load on the server memory footprint.';
function loadMemory(size) {
  arr = [];
  for (var i = 0; i<size; i++){
    arr.push(txt);
  }
}
