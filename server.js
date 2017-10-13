var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var Reservations = require('./reservations.js');

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:"application/vnd.api+json"}));

app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/api", function(req, res) {
	res.json(Reservations.reservations);
	// res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/api/tables", function(req, res) {
	res.json(Reservations.currentReservations());
	// res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/api/waitlist", function(req, res) {
	res.json(Reservations.waitList());
	// res.sendFile(path.join(__dirname, "view.html"));
});

app.post("/api/reserve", function(req, res) {
	// do stuff with req.body
	// Reservations.reservations.push(req.body);
});


app.listen(PORT, function(err) {
	if (err) throw err;
	console.log("Listening on port " + PORT);
});