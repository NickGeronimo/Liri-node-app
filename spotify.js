require("dotenv").config();
var keys = require('./keys.js');


var Spotify = require('node-spotify-api');
 
var spotify=new Spotify(keys.spotify);

 
  spotify.search({ type: 'track', query: 'all the small things'}, function(error, data){
    if(!error){
      for(var i = 0; i < data.tracks.items.length; i++){
        var songData = data.tracks.items[i];
        console.log(' ')
        console.log("Artist: " + songData.artists[0].name);
        console.log("Song: " + songData.name);
        console.log("Preview URL: " + songData.preview_url);
        console.log("Album: " + songData.album.name);
        console.log(" ")
        console.log("------------------------------");
      }
    }})