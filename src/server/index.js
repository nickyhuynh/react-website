var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname +'/../../views/')); //serves the index.html

app.get('/projects', function(req, res) {
  res.sendFile(path.resolve(__dirname + '/../../views/projects.html'));
});

app.get('/projects/:projectId', function(req, res) {

});

app.listen(3000); //listens on port 3000 -> http://localhost:3000/
