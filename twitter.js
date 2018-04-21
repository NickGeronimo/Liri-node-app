require("dotenv").config();
var keys = require('./keys.js');
var Twitter = require('twitter');
var client = new Twitter(keys.twitter);



function showTweets(){
    //Display last 20 Tweets
    var screenName = {screen_name: 'NicNackPatyWack'};
    client.get('statuses/user_timeline', screenName, function(error, tweets, response){
      if(!error){
        for(var i = 0; i<20; i++){
          var date = tweets[i].created_at;
          console.log("@NicNackPatyWack: " + tweets[i].text);
          console.log("-----------------------");
          
    
        }
      }else{
        console.log('Error occurred');
      }
    });
  }

  showTweets()