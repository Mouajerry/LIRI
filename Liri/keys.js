console.log('this is loaded');

exports.spotify = {
  id: "f3d28a4b52a541beb5bd8752ccd842b4",
  secret: "4dfd2f39951d4a318470c46e8304796b"
};

exports.bandsintown = {
  id: process.env.BANDSINTOWN_ID
}

exports.omdb = {
  id: process.env.OMDB_ID
}