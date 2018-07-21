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
];

var tables = [
	{
		reservation: "",
		waiting: ""
	}
];

app.get("/api/reservations", function(req, res) {
	
	console.log(req.params);
	for (var i = 0; i < reservations.length; i++){
		console.log("hello")
		return res.json(reservations[i]);
	}
});

app.get("/api/waitlist", function(req, res) {
	
	console.log(req.params);
	for (var i = 0; i < waitlist.length; i++){
		console.log("Govana")
		return res.json(waitlist[i]);
	}
	
});

app.get("/reservation.html", function(req, res) {
	res.sendFile(path.join(__dirname, "/reservation.html"));
});

app.get("/index.html", function(req, res) {
	res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/tables.html", function(req, res) {
	res.sendFile(path.join(__dirname, "/tables.html"));
});

app.post("/api/reservations", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newReservation = req.body;
	console.log(newReservation);
  // Using a RegEx Pattern to remove spaces from newReservation
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

  console.log(newReservation);

  reservations.push(newReservation);

  res.json(newReservation);
});

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});