var http = require('http');
var {app} = require('./app.js')
var server = http.createServer(app)

const port = process.env.PORT || 3000

server.listen(port,()=>
{
    console.log("http://localhost:"+port)
});
