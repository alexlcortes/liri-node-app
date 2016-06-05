
var keys = require('./keys.js');
// var request = require('request');

var index2 = process.argv[2];
var index3 = process.argv[3];


if (index2 == "movie-this") {
	movie();

} else if (ind2 == "my-tweets") {
	console.log('Hold please...')

} else if  (ind2 == "spotify-this-song") {
	console.log('Hold please...')

} else if (ind2 == "do-what-it-says") {
	console.log('Hold please...')

} else {
	console.log("I will not do that.");
}

// function that runs movie-this command
function movie() {
	var request = require('request');

	var url = "http://www.omdbapi.com/?t=" + index3 + "&y=&plot=short&tomatoes=true&r=json";

	request(url, function (error, response, body) {
		body = JSON.parse(body);
		// console.log(body);
		console.log(body.Title);
		console.log(body.Year);
		console.log(body.imdbRating);
		console.log(body.Country);
		console.log(body.Language);
		console.log(body.Plot);
		console.log(body.Actors);
		console.log(body.tomatoUserRating);
        console.log(body.tomatoURL);

	})
}