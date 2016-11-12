var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.resolve(__dirname, 'views')));
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

app.get('/', function (req, res) {
  res.render('index.ejs');
});

app.listen(3010, function() {
  console.log("Running");
});
