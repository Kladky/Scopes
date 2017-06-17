'use strict'

const app = require('express').Router()
const rita = require('rita');

// const rs = rita.RiString("The elephant took a bite!");
// console.log("SOME FEATURES I GUESS?",rs.features());

let rm = new rita.RiMarkov(3);
let text = "Love, laughter & communication are the three essentials to good life, never let them fade. its tiring to see em against your opinion regarding this issue. A lifetime of judgment makes me feel guilty and like people are watching me if I pick up something bad. not to dictate your life but drop your **** friends. He learned very early in life how to be a dirtbag, one thing I learned is you can't go through life like that… If you're unhappy in life, then you have to DO something major to change it: -Move -Breakup/Get divorced -Quit your job. How much of your life have you tried to fit in while feeling like you didn’t? You can't expect someone to stay in your life if you're doing nothing but hurting them."
rm.loadText(text);
// rm.print();

let sentences = rm.generateSentences(3);
console.log("SOME SENTANCES I HOPE????? ", sentences);

app.get('/', function (req, res, next) {

  res.status(200).send("hello.")
});



module.exports = app
