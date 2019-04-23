//http is predefined module.......it has its own server
var http = require('http');

//Fs for streams.......
var fs=require('fs');

//Creating a  server through http..........
var server=http.createServer(function(req,res){

  //Getting request which we have given....
  //console.log('Requesting url is:' + req.url);

   //Writing headers.........writeHead() writes header
    res.writeHead(200, {'Content-Type' : 'text/html'})  //200 is no of lines in code and content-type is what type of content we are going to give as html.......
   var myReadStream = fs.createReadStream(__dirname + '/index.html');  //**AS NOW,WE ARE RENDERING INDEX.HTML PAGE OVER HERE.......
   myReadStream.pipe(res);
});

//Server only responds if we have request listening to it........
server.listen(3001,'127.0.0.1');      //port no and ip address....here we give of localhost only but as we put live it has to change


console.log('Listening to port 3001!');
