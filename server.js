const http = require('http');
const url = require('url');

function start(route, handle) {
    function onRequest(req, res) {
        const postData = '';
        const pathname = url.parse(req.url).pathname;
        console.log('Request for ' + pathname + ' received.');

        req.setEncoding(utf8);

        req.addListener('data', function(postDataChunk) {
            postData += postDataChunk;
            console.log('Received POST data chunk '+
            postDataChunk + '.');
        });

        requestAnimationFrame.addListener('end', function(){
            route(handle, pathname, res, postData);
        })

    }

    http.createServer(onRequest).listen(8888);
    console.log('Server has started.');
}

exports.start = start;