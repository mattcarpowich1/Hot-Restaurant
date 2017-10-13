var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:"application/vnd.api+json"}));

app.get("/", function(req, res) {
	res.send("<h2>Hello</h2>");
	// res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/api", function(req, res) {
	res.json("{ foo: 'bar' }");
	// res.sendFile(path.join(__dirname, "view.html"));
});


app.listen(PORT, function(err) {
	if (err) throw err;
	console.log("Listening on port " + PORT);
});