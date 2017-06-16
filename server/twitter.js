'use strict'

const app = require('express').Router()
var Filter = require('bad-words')
const Twitter = require('twitter-node-client').Twitter
const config = require('../data/twitter_config')
const twitter = new Twitter(config)

var filter = new Filter();
// if we need to include back in some bad words, do it here:
// filter.removeWords('whatever word here');

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
  let searchTerms = ["romance", "connect", "regarding", "yourself", "instead", "something", "feeling", "someone", "actions", "perhaps", "especially", "people", "answers", "situations", "communication", "another", "information", "together", "dictate", "pressured"]
  let randomSeachTerm = searchTerms[Math.floor(Math.random()*searchTerms.length)];
  let data = twitter.getSearch(
    {
      'q': randomSeachTerm + " life",
      'lang': 'en'
    },
    (err, response, body) => {
      next(new Error("Problem in get /api/twitter: ", err))
    },
    (data) => {
      let rawData = JSON.parse(data);
      let cleanData = [];
      let urlRegex = /(https?:\/\/[^\s]+)/g;
      let userRegex = /(@\w*\s)/g;
      let userFancyRegex = /(@\w*:\s)/g;
      let elipRegex = /(\s\w*[…])/g;

      let forbiddenWords = ["trump", "democrat", "democrats", "republicans", "republican", "ESPN", "FIFA", "Supreme Court"];

      // pull out the tweet texts:
      for(let i = 0; i < rawData.statuses.length; i++) {
        cleanData.push(rawData.statuses[i].text)
      }

      // remove urls, @s, tweets with forbidden words, etc:
      for(let i = 0; i < cleanData.length; i++) {
        for(let j=0; j< forbiddenWords.length; j++) {
          if(cleanData[i].toLowerCase().indexOf(forbiddenWords[j].toLowerCase()) !== -1) {
            var removed = cleanData.splice(i, 1);
          }
        }
        cleanData[i] = filter.clean(cleanData[i])
        cleanData[i] = cleanData[i].replace(urlRegex, '')
        cleanData[i] = cleanData[i].replace(userRegex, '')
        cleanData[i] = cleanData[i].replace(userFancyRegex, '')
        cleanData[i] = cleanData[i].replace(elipRegex, '')
        cleanData[i] = cleanData[i].replace('&amp;', '&')
        cleanData[i] = cleanData[i].replace('&gt;', '>')
        cleanData[i] = cleanData[i].replace('&lt;', '<')
        cleanData[i] = cleanData[i].replace('&quot;', '"')
        cleanData[i] = cleanData[i].replace('&#39;', "'")
        cleanData[i] = cleanData[i].replace('RT ', '')
      }

      res.status(200).send(cleanData)
    }
  )

});



module.exports = app
