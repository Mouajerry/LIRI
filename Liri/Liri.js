// .env file
require("dotenv").config();

// require request
let request = require("request");

// require moment
const moment = require(`moment`);

// require file systems
const fs = require("fs");

// linking key.js
const keys = require("./keys.js");

// require spotify
const spotify = require(`node-spotify-api`);
var spotify = new Spotify(keys.spotify);

// OMBD API
let ombd = (keys.ombd);

// Bandsintown API
let bandsintown = (keys.bandsintown);

var userinput = process.argv[2];
var userQuery = process.argv.slice(3).join(" ");

// command questions
function userCommand(userinput, userQuery) {

    switch (userinput) {
        case "consert-this":
            concertThis();
            break;
        case "spotify-this-song":
            spotifyThisSong();
            break;
        case "movie-this":
            movieThis();
            break;
        case "do-what-it-says":
            doThis();
            break;
        default:
            console.log("I don't know, Please ask again or another question.")    
            break;
    }
}

