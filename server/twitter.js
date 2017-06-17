'use strict'

const app = require('express').Router()
const Filter = require('bad-words')
const Promise = require('bluebird');
const Twitter = require('twitter-node-client').Twitter
const config = require('../data/twitter_config')
const twitter = new Twitter(config)

const filter = new Filter();
filter.addWords(['nikkas']);

// PROMISIFY TWITTER SEARCH:
// THIS IS A SEARCH EXAMPLE
// twitter.getSearch({'q':'#haiku','count': 1}, error, success);

let twitterSearchAsync = (search) => {
  return new Promise((resolve,reject) => {
    twitter.getSearch(search,twitterErrorHandler,(data) => resolve(data));
  });
}

let twitterErrorHandler = (err, response, body) => {
  next(new Error("Problem in get /api/twitter: ", err))
}

let searchTerms = ["romance", "connect", "regarding", "yourself", "instead", "something", "feeling", "someone", "actions", "perhaps", "especially", "people", "answers", "situations", "communication", "another", "information", "together", "dictate", "pressured"]
let lifeTerms = ["life", "lifetime"]
let loveTerms = ["love", "romance", "lover"]
let careerTerms = ["career", "business", "vocation", "hustle", "profession", "professional", "entrepreneur"]

app.get('/', function (req, res, next) {

  // SET UP SEARCH TERMS:
  let randomLifeTerms = searchTerms[Math.floor(Math.random()*searchTerms.length)] + " " + lifeTerms[Math.floor(Math.random()*lifeTerms.length)];
  let randomLoveTerms = searchTerms[Math.floor(Math.random()*searchTerms.length)] + " " + loveTerms[Math.floor(Math.random()*loveTerms.length)];
  let randomCareerTerms = searchTerms[Math.floor(Math.random()*searchTerms.length)] + " " + careerTerms[Math.floor(Math.random()*careerTerms.length)];

  console.log("life: ", randomLifeTerms, " love: ", randomLoveTerms, " career: ", randomCareerTerms)

  let lifeSearch = {
    'q': randomLifeTerms,
    'lang': 'en'
  }
  let loveSearch = {
    'q': randomLoveTerms,
    'lang': 'en'
  }
  let careerSearch = {
    'q': randomCareerTerms,
    'lang': 'en'
  }

  // SET UP THINGS TO PARSE THE TWEETS:
  let cleanData = [[],[],[]];
  let urlRegex = /(https?:\/\/[^\s]+)/g;
  let userRegex = /(RT )?(@)\S+/g;
  //let userFancyRegex = /(@\w*:\s)/g;
  let elipRegex = /(\s\w*[…])/g;
  let forbiddenWords = ["Clinton", "Muslim", "Christian", "Jewish", "American", "CNN", "conservative", "liberal", "HOLOCAUST", "NFL", "religious freedom", "Melania", "genital", "olympic", "white supremacist", "government", "insurance", "justice", "NHS", "potus", "discount", "FREE Shipping", "USA", "Shane Long", "#JusticeFor", "Jeff Sessions", "Little Mix", "kpop", "officer", "Megyn Kelly", "trump", "testified", "police", "democrat", "democrats", "republicans", "republican", "ESPN", "FIFA", "Supreme Court"];

  // START UP THE ASYNC REQUESTS FOR TWEETS:
  let gettingLifeData = twitterSearchAsync(lifeSearch)
  let gettingLoveData = twitterSearchAsync(loveSearch)
  let gettingCareerData = twitterSearchAsync(careerSearch)

  // DEAL WITH THE DATA ONCE WE GET IT ALL BACK:
  Promise.all([gettingLifeData, gettingLoveData, gettingCareerData]).then(data => {
    // data is [{}{}{}]
    for (let i=0; i<data.length; i++) {
      let rawData = JSON.parse(data[i]);
      // pull out the tweet texts:
      for(let j = 0; j < rawData.statuses.length; j++) {
        cleanData[i].push(rawData.statuses[j].text)
      }
    }
    console.log("found some results. life: ", cleanData[0].length, " love: ", cleanData[1].length, " career: ", cleanData[2].length );

    // remove urls, @s, tweets with forbidden words, etc:
    for(let i = 0; i < cleanData.length; i++) {

      // we don't want any tweets that contain our forbidden words:
      for(let x = 0; x < cleanData[i].length; x++) {

        for(let j=0; j< forbiddenWords.length; j++) {
          if(cleanData[i][x].toLowerCase().indexOf(forbiddenWords[j].toLowerCase()) !== -1) {
            // if a match is found, delete the tweet and go on to the next one:
            let removed = cleanData[i].splice(x, 1);
          }
        }

      }

      // now, clean up unwanted stuff:
      for(let x = 0; x < cleanData[i].length; x++) {

        cleanData[i][x] = filter.clean(cleanData[i][x])
        cleanData[i][x] = cleanData[i][x].replace(urlRegex, '')
        cleanData[i][x] = cleanData[i][x].replace(userRegex, '')
        cleanData[i][x] = cleanData[i][x].replace(elipRegex, '')
        cleanData[i][x] = cleanData[i][x].replace('&amp;', '&')
        cleanData[i][x] = cleanData[i][x].replace('&gt;', '>')
        cleanData[i][x] = cleanData[i][x].replace('&lt;', '<')
        cleanData[i][x] = cleanData[i][x].replace('&quot;', '"')
        cleanData[i][x] = cleanData[i][x].replace('&#39;', "'")
        cleanData[i][x] = cleanData[i][x].replace('RT ', '')

      }
    }
    console.log("Results have been cleaned. life: ", cleanData[0].length, " love: ", cleanData[1].length, " career: ", cleanData[2].length );
    res.status(200).send(cleanData)
  })
  .catch(next);

});



module.exports = app
