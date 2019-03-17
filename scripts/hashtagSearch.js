//>>>>>>> it works on server side only.... cuz no DB to assist yet
console.log('vamula');

let Twit = require('twit');

let config = require('./config');
let T = new Twit(config);
console.log(config);

let params = {
  q: '#maislidas',
  count: 10
};

//>>>>>>> post method post to the twitter timeline's account which keys are in config.js //
// T.post('statuses/update', { status: 'test' }, function(err, data, response) {
//   // console.log(data)
//   if(err){
//     console.log('somthing went wrong');
//   }else{
//     console.log('post worked!');
//   }
// }) //>>>>>>> IT WORKS!!

//>>>>>>> log the filtered hashtag results
T.get('search/tweets', params, gotData);
function gotData(err, data, response){
  let tweets = data.statuses;
  for (var i =0; i < tweets.length; i++){
    console.log(tweets[i].created_at);
    console.log(tweets[i].text);
  }
   // console.log(data);
}
