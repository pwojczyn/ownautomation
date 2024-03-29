var express = require('express');
var app = express();

var staticFolder = 'public';
app.use(express.static(staticFolder));

app.get('/', (req, res) => {
    res.send('ownAutomation work !');
});

app.get('/test', function (req, res) {
  
  res.send('test command! ownAutmation URL: ' + req.get.name);
});

app.get('/info', function(req, res){
  res.sendFile(staticFolder + '/info.html', { root: __dirname });
}); 

app.get('/users/:name', function(req, res) {
    res.send('What is up ' + req.params.name + '!');
    console.log(req);
});

app.get('/testjson', function(req, res) {
  var obj = { name: "John", age: 30, city: "New York" };
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(obj));
});

app.listen(3000, function () {
  console.log('ownAutomation app listening on port 3000!');
});