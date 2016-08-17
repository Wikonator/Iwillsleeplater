var http = require("http");
var fs = require("fs");

var serverus = http.createServer(function (request, response) {
    request.on("error", function(error) {
        console.log(error);
    });
    response.on("error", function(error) {
        console.log(error);
    });

    console.log(request.method);
    // console.log( request.headers );
    // console.log( request.url);

    if (request.method === "GET" || "HEAD") {
        response.writeHead(200, {"Content-Type": "text/html"});
    }
    if (request.method === "GET") {
        fs.readFile("index.html", function(err, html){
           if(err) {
              response.writeHead(404);
              response.write("Not Found!");
           }
           else{
              response.writeHead(200, {"Content-Type": "text/html"});
              response.write(html);
              response.end();
           }
       });
   }
    if (request.method === "POST") {
        response.writeHead(303, {"Location": "/"});
        var body = '';
        request.on('data', function(chunk) {
            body += chunk;
            console.log("chunks ")
        }).on('end', function() {
            console.log("the body " + body); //logs the entire request body
        });

        console.log(body);
        response.end();
     }



});

serverus.listen(9002, function () {
    console.log("I've got ya fam")
})
