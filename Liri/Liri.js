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

var userinput = process.argv[2];
var userQuery = process.argv.slice(3).join(" ");

// command questions
function userCommand(userinput, userQuery) {

    switch (userinput) {
        case "consert-this":
            concert();
            break;
        case "spotify-this-song":
            song();
            break;
        case "movie-this":
            movie();
            break;
        case "do-what-it-says":
            dothis();
            break;
        default:
            console.log("I don't know, Please ask again or another question.")    
            break;
    }
}

userCommand(userinput, userQuery);

function song() {

 if (!userQuery) {
     userQuery = "What? What?"
 };

 spotify.search({
     type: `track`,
     query: userQuery,
     limit: 1
 }, function (error, data) {
     if (error) {
         return console.log(`Error occurred` + error);
     }

     let spotifyArray = data.track.items;
     for (i =0; i < spotifyArray.length; i++) {
         console.log(`${data.track.items[i].album.artist[0].name}`)
     };
 });
}

// function concert() {
    // request ("https://rest.bandsintown.com/artists/" + userQuery + "/event?app_id=" + bandsintown, function (err, ersponse, body) {
        // error code if can't load
       // if (err) {
        //   return console.log(err);
  //      }
        
//    })
 // }

