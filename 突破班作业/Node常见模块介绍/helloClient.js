var http = require('http');

var options = {
    protocol: 'http:',
    hostname: 'localhost',
    port: '8000',
    path: '/',
    method: 'GET'
};

var client = http.request(options, function (res) {
    var data = '';
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        data += chunk;
    });
    res.on('end', function () {
        console.log(data);
    });
});

client.end();