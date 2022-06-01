var http = require('http')

var myServer = http.createServer(function(req,res){
    res.writeHead(200, {'Content-type': 'text/html'});
    if(req.url == '/'){
        res.write('<html><body><p style = "color : red"> This is homepage. </p></body></html>');
    }
    //set reponse content
    else if(req.url == '/student'){
        res.write('<html><body><p style = "color : blue"> This is student page. </p></body></html>');
    }else{
    res.write('<html><body><p style = "color : red"> Home pase is not found!. </p></body></html>');
    }
    res.end()
})

myServer.listen(5000)
console.log("Server is running")