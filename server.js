// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Variables
//==============================================================
var reservations = [
	{
		first_name: "",
		last_name: "",
		phone: "",
		email: "",

	}
];

var waitlist = [
	{
		first_name: "",
		last_name: ""
	}
]

var tables = [];

app.get("/api/reservationsJSON", function(req, res) {
	
	console.log(req.params);
	for (var i = 0; i < reservations.length; i++){
		console.log("hello")
		return res.json(reservations[i]);
	}
});

app.get("/api/waitlistJSON", function(req, res) {
	
	console.log(req.params);
	for (var i = 0; i < waitlist.length; i++){
		console.log("Govana")
		return res.json(waitlist[i]);
	}
	
});

app.get("/reservations", function(req, res) {
	res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
	res.sendFile(path.join(__dirname, "tables.html"));
});


app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});