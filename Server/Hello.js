var http = require('http');
var crawler = require('crawler');

var webres;
var server = http.createServer();


var c = new crawler({
 maxConnections : 10,
  callback:function(error,res,done){
    if(error){
      console.log(error);
    }
    else{
      var $ = res.$;
           // $ is Cheerio by default
           //a lean implementation of core jQuery designed specifically for the server

           //currently we just use a certain keyword to navigate through the website
           webres = $( "h2:contains('Full Lineup')" ).siblings().text();
           console.log(webres);
    }
    done();
  }
});



// only support static webpage for now ,need to find a way to deal with AJAX
c.queue('https://blog.us.playstation.com/2017/08/30/ps-plus-free-games-for-september/');



server.on('request',function(req,res){
  //when there is a request ,return the plain text of the crawl result
  res.writeHead(200,{'Content_Type':'text/plain'});
  res.end(webres);
});
server.listen(1337,'127.0.0.1');
console.log('server running on http://127.0.0.1:1337/');
