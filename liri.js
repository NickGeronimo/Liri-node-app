require("dotenv").config();
var keys = require('./keys.js');
var request = require('request');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');

var client = new Twitter(keys.twitter);
var spotify=new Spotify(keys.spotify);

var call = process.argv[2];
var require = process.argv[3];

function showTweets(){
    //Display last 20 Tweets
    var screenName = {screen_name: 'NicNackPatyWack'};
    client.get('statuses/user_timeline', screenName, function(error, tweets, response){
      if(!error){
        for(var i = 0; i<tweets.length; i++){
          console.log(' ')
          console.log("@NicNackPatyWack: " + tweets[i].text);
          console.log("-----------------------");
          console.log(' ')
          
        }
      }else{
        console.log('Error occurred');
      }
    });
  }
function song(){
  spotify.search({ type: 'track', query: require}, function(error, data){
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

}
function omdbData(){
    var omdbURL = 'http://www.omdbapi.com/?apikey=trilogy&t=' + require + '&plot=short&tomatoes=true';
  
    request(omdbURL, function (error, response, body){
      if(!error && response.statusCode == 200){
        var body = JSON.parse(body);
  
        console.log("Title: " + body.Title);
        console.log("Release Year: " + body.Year);
        console.log("IMdB Rating: " + body.imdbRating);
        console.log("Country: " + body.Country);
        console.log("Language: " + body.Language);
        console.log("Plot: " + body.Plot);
        console.log("Actors: " + body.Actors);
        console.log("Rotten Tomatoes Rating: " + body.tomatoRating);
        console.log("Rotten Tomatoes URL: " + body.tomatoURL);
      }
    })
    }


if(call === 'read-my-tweets'){
    showTweets()
}

if(call === 'movie-this'){
    omdbData('Lion King')
}
if(call === 'spotify-this-song'){
    song();
}

