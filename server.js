var express = require('express');
var app = express();
const ip = process.env.PRODUCTPAGE_SERVICE_HOST;
const port = process.env.PRODUCTPAGE_SERVICE_PORT;

app.get('/', function (req, res) {
  res.send('Hello World! production page: ' + ip + ':' + port);
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
