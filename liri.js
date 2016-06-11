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
	doWhat();

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

	console.log("The tweets are coming!");
	// require for twitter stuff
	var Twit = require('twitter')

	// twitter keys
	var config = require('./keys.js');

	var T = new Twit(config.twitterKeys);

	// parameters for the get process
	var params = {
		q: 'giant_kosmos',
		count: 20
	};

	T.get('search/tweets', params, gotData);


	function gotData(err, data, response) {

		// main section of the JSON object i think
		var tweets = data.statuses;
		for (var i = 0; i < tweets.length; i++) {
			// this prints the time of my tweets and the text inside them
			console.log("Time: " + tweets[i].created_at + ' ' + "Text: " + tweets[i].text);
		}
		// console.log(data.user);
	}
}

function doWhat() {

fs.readFile('random.txt', 'utf8', function (err,data) {
		if (err) {
	    	return console.log(err);
	 	} else {
		  	//Split the string with the seperator as a comma
		  	var strSplit = data.split(",");
		  	console.log(strSplit[0]);
		  	console.log(strSplit[1]);

		  	switch(strSplit[0])	{
		  		case "spotify-this-song":
		  			music(strSplit[1]);
		  			break;
		  		case "movie-this":
		  			movie(strSplit[1]);
		  			break;
		  	}
		}
	});
}