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

