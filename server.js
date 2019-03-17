var express = require('express');
var app = express();
const https= require('https');
var path = require('path');
var bodyParser = require('body-parser')
var http = require('http').Server(app);


var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
}

app.use(express.static(__dirname + '/dist'));
app.use(allowCrossDomain);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}))

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/explremore', function (req, res) {
  // const a=scrape_insta_hash('bathroom');
  // console.log(req.url);
  console.log(req.query.q);

  scrape_insta_hash(req.query.q).then(
    images => {
      // console.log(images);
      res.send(images);  }
  );
  // res.send(scrape_insta_hash('bathroom').then(images => console.log(images)));
})



var port = process.env.PORT || 3001;
app.listen(port);

console.log('server is running on port',port );



const getContent = function (url) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? require('https') : require('http');
    const request = lib.get(url, (response) => {
      if (response.statusCode < 200 || response.statusCode > 299) {
        reject(new Error('Failed to load page, status code: ' + response.statusCode));
      }
      const body = [];
      response.on('data', (chunk) => body.push(chunk));
      response.on('end', () => resolve(body.join('')));
    });
    request.on('error', (err) => reject(err))
  })
};

function scrape_insta_hash(tag) {
  return new Promise((resolve, reject) => {
    //getContent(`https://www.instagram.com/explore/tags/${tag}/`)
    getContent(`https://www.instagram.com/explore/tags/${tag}/`)
      .then(insta_source => {
        let shards = insta_source.split('window._sharedData = ');
        let insta_json = shards[1].split(';</script>');
        let insta_array = JSON.parse(insta_json[0]);

        let images = insta_array['entry_data']['TagPage'][0]['graphql']['hashtag']['edge_hashtag_to_media']['edges'].map(x => x['node']['display_url']);

        resolve(images);
      })
      .catch(err => reject(err));
  })
};

// scrape_insta_hash('').then(images => console.log(images));
