'use strict'

const app = require('express').Router()
const Twitter = require('twitter-node-client').Twitter
const config = require('../data/twitter_config')
const twitter = new Twitter(config)

// Example callback functions for Twitter
// let error = function (err, response, body) {
//     console.log('ERROR [%s]', err);
// };
// let success = function (data) {
//     console.log('Data [%s]', data);
// };

// THIS IS A SEARCH EXAMPLE
// twitter.getSearch({'q':'#haiku','count': 1}, error, success);

app.get('/', function (req, res, next) {
  let searchTerms = ["predict"]
  let data = twitter.getSearch(
    {'q': searchTerms[0]},
    (err, response, body) => {
      next(new Error("Problem in get /api/twitter: ", err))
    },
    (data) => {
      let rawData = JSON.parse(data);
      let cleanData = [];
      let urlRegex = /(https?:\/\/[^\s]+)/g;
      let userRegex = /(@\w*\s)/g;
      let userFancyRegex = /(@\w*:\s)/g;

      // pull out the tweet texts:
      for(let i = 0; i < rawData.statuses.length; i++) {
        cleanData.push(rawData.statuses[i].text)
      }

      // remove urls, @s, etc:
      for(let i = 0; i < cleanData.length; i++) {
        cleanData[i] = cleanData[i].replace(urlRegex, '')
        cleanData[i] = cleanData[i].replace(userRegex, '')
        cleanData[i] = cleanData[i].replace(userFancyRegex, '')
        cleanData[i] = cleanData[i].replace('RT ', '')
      }

      res.status(200).send(cleanData)
    }
  )

});

module.exports = app
