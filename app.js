var express = require('express');
var app = express();

var staticFolder = 'public';
app.use(express.static(staticFolder));

app.get('/', (req, res) => {
    res.send('ownAutomation work !');
});

app.get('/test', function (req, res) {
  res.send('test command! ownAutmation');
});

app.get('/info', function(req, res){
  res.sendFile('./' + staticFolder + '/info.html', { root: __dirname });
}); 

app.listen(3000, function () {
  console.log('ownAutomation app listening on port 3000!');
});