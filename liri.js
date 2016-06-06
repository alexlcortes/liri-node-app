// require for twitter stuff
var keys = require('./keys.js');
// var for node use
var index2 = process.argv[2];
// var for node use
var index3 = process.argv[3];


if (index2 == "movie-this") {
	movie();

} else if (index2 == "my-tweets") {
	console.log('Hold please...')

} else if  (index2 == "spotify-this-song") {
	music();

} else if (index2 == "do-what-it-says") {
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


// function that runs spotify-this-song command
function music() {

	// require for spotify stuff
	var spotify = require('spotify');

	spotify.search({ type: 'track', query: index3 }, function(err, data) {
    	if (err) {
        	console.log('Error occurred: ' + err);
        	return;
    	}
    	console.log('Artist(s): ' + data.tracks.items[0].artists[0].name)
        console.log('Song Name: ' + data.tracks.items[0].name);
        console.log('Preview Link: ' + data.tracks.items[0].preview_url);
        console.log('Album: ' + data.tracks.items[0].album.name);
	})
}