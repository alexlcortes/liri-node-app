var fs = require('fs');

// var for node use
var index2 = process.argv[2];
// var for node use
var index3 = process.argv[3];


if (index2 == "movie-this") {
	movie();

} else if (index2 == "my-tweets") {
	tweets();

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
    	console.log(data.tracks.items[0].artists[0].name)
        console.log(data.tracks.items[0].name);
        console.log(data.tracks.items[0].preview_url);
        console.log(data.tracks.items[0].album.name);
	})
}

// function that runs my-tweets command
function tweets() {

	// require for twitter stuff
	var twitter = require('twitter');

	// require for twitter stuff
	var client = require('./keys.js');

	var params = {screen_name: 'giant_kosmos'};
		client.get('statuses/user_timeline', params, function(error, tweets, response){
 	 	if (!error) {
    		console.log(tweets);
  		}
	});
}