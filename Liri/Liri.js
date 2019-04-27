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

var spotify = new Spotify(keys.spotify);