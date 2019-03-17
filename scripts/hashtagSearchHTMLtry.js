// to print the twitter texts into the webbrowser after inserting Hashtag in the input(type=text)

console.log('vamula'); //just to confirm it is running...

const searchForHashtag = () => {
  // >>>> whenever these are not commented the code does not work as it returns JSON which the page does not understand... needs a DB to work properly
  // let Twit = require('twit');
  // let config = require('scripts/config');
  // let T = new Twit(config);
  // console.log(config);

  let hashtag = document.getElementById("hashtag").value;
  document.getElementById("tweetDate").innerHTML = hashtag;
  // let params = {
  //   q: hashtag,
  //   count: 1
  // };
  // // post method post to the twitter timeline's account which keys are in config.js
  // // T.post('statuses/update', { status: 'test' }, function(err, data, response) {
  // //   // console.log(data)
  // //   if(err){
  // //     console.log('somthing went wrong');
  // //   }else{
  // //     console.log('post worked!');
  // //   }
  // // }) // IT WORKS!!
  //
  // T.get('search/tweets', params, gotData);
  // function gotData(err, data, response){
  //   // let hashtagChoice = document.getElementById("hashtag").value
  //   // console.log(hashtagChoice);
  //
  //   let tweets = data.statuses;
  //   for (var i =0; i < tweets.length; i++){
  //     // console.log(tweets[i].created_at);
  //     // console.log(tweets[i].text);
  //
  //     let tweetDate = 'whatever' + tweets[i].created_at;
  //     let tweet = tweets[i].text;
  //     console.log(tweetDate);
  //     console.log(tweet);
  //     document.getElementById("tweetDate").innerHTML = tweetDate;
  //     document.getElementById("tweet").innerHTML = tweet;
  //   }
  //    // console.log(data);
  // }
}
