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
var spotify = new spotify(keys.spotify);

// OMBD API
let ombd = (keys.ombd);

// Bandsintown API
let bandsintown = (keys.bandsintown);

let userinput = process.argv[2];
let userQuery = process.argv.slice(3).join(" ");

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

userCommand(userinput, userQuery);

function spotifyThisSong() {

 if (!userQuery) {
     userQuery = "What What BOYYY"
 };

 spotify.search({
     ype: `track`,
     query: userQuery,
     limit: 1
 }, function (error, data) {
     if (error) {
         return console.log(`error` + error);
     }

     let spotifyArray = data.track.items;
     for (i =0; i < spotifyArray.length; i++) {
         console.log(`${data.track.items[i].album.artist[0].name}`)
     };
 });
}

// function concertThis() {
    // request ("https://rest.bandsintown.com/artists/" + userQuery + "/event?app_id=" + bandsintown, function (err, ersponse, body) {
        // error code if can't load
       // if (err) {
        //   return console.log(err);
  //      }
        
//    })
 // }

