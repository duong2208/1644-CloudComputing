var http = require('http')

var myServer = http.createServer(function(req,res){
    res.writeHead(200, {'Content-type': 'text/html'});
    if(req.url == '/'){
        res.write('<html><body><p style = "color: red; margin: 0 20px; font-size: 30px"> <b> Home page </b> <p></body></html>');
        res.write('<html><body>  <label for="Name" class="font-weight-bold"><b>Name: </b></label><input type="Name" class="form-control" id="name" name="name" value=""></body></html><br><br>');
        res.write('<html><body>  <label for="Gender" class="font-weight-bold"><b> Gender: </b> </label><input type="radio" id="male" name="gender" value="Male"><label for="male">Male</label> &nbsp &nbsp<input type="radio" id="female" name="gender" value="Female"><label for="female">Female</label><br></body></html><br><br>');
        res.write('<html><body>  <label for="cars"><b> Country: </b></label> <select name="countrys" id="cars" form="carform"><option value="volvo">VietNam</option><option value="saab">ThaiLand</option><option value="opel">Lao</option><option value="audi">Campuchia</option></select></form></body></html><br>');
        res.write('<html><body>  <input type="submit" value="OK"></form></body></html><br>');
        res.end();  
    }
})
    myServer.listen(3000)
    console.log("Server is running")