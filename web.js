var express = require('express');
var app = express();
var absPath = __dirname;
//var buf = fs.readFileSync(absPath + "/index.html");

app.use(express.logger());

app.get('/', function(request, response) {
   response.send(fs.readdirSync('.')); //indexBuf.toString('utf8', 0, buf.length));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
