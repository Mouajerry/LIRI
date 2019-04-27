// .env file
require("dotenv").config();

// require request
let request = require("request");

// require moment
const moment = require(`moment`);

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);