var http = require('http');
var url = require('url');
var createServer = http.createServer(onRequest);

var person={
	"tem":38,
    "age":37.7,
    "asd":"ad"
}
// console.log(person.tem)
function onRequest(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*'
    });
    var str = JSON.stringify(person);
    response.write(str);
    response.end();
}
createServer.listen(8088);
console.log('Server running on port http://127.0.0.1:8088/');