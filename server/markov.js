'use strict'

const app = require('express').Router()
const rita = require('rita');

// const rs = rita.RiString("The elephant took a bite!");
// console.log("SOME FEATURES I GUESS?",rs.features());

let markovLife = new rita.RiMarkov(3);
//let lifeText = `The prospect of failure is not one that you acknowledge. Where other people see risk, you see an opportunity just waiting to be grabbed. This attitude could bring you a lot of success at this time. Friends and colleagues may wonder how you get the guts to do the things you do. It's fine if you take pride in it -- but don't ever ask people why they aren't willing to take such risks themselves. Remember, it takes all kinds. You can be quiet and reclusive when it comes to expressing feelings. Today may be the exception. The aspects can bring real strength to your communication abilities. You'd be wise to seize the opportunity. Take steps to express your feelings by initiating conversations. Words will come much more easily than usual. If there are problems to handle, you will likely find resolutions. Love, laughter & communication are the three essentials to good life, never let them fade its tiring to see em against your opinion regarding this issue. A lifetime of judgment  makes me feel guilty - like people are watching me if I pick up something bad not to dictate your life but drop your **** friends He learned very early in life how to be a dirtbag, one thing I learned is you can't go through life like that… If you're unhappy in life, then you have to DO something major to change it: -Move -Breakup/Get divorced -Quit your job. From modern-day hustle and bustle to the serenity of the past #romance #timetravel How much of your life have you tried to fit in while feeling like you didn’t? song finds the words to express what i've been feeling for a lifetime. the power art has to make you feel understood You can't expect someone to stay in your life if you're doing nothing but hurting them Retweet to bless someone's timeline. No matter how good or bad you think life is, wake up each day and be thankful. Someone somewhere else is fighting. Stay strong the future may seem uncertain but you will come out the other side. It may have tough timing. I never think of the future. It comes soon enough. There are only two options regarding commitment; you're in or you're out. There's no such thing as life in-between... Vulnerable life situations. Waiting for that future tho... 🔥 Life is like a camera. Focus on what's important. Capture the good times, Get rid of the negatives. The pain and trials you go through now will make a great story in the future. Instead of looking down on people inspire someone, change someone's life for the better, encourage someone to reach HIGHER I just be tweeting don't try to puzzle my life together lol Everything has a frequency. and whatever you're feeling is bringing everything into your life that's on a similar wavelength. if ur pals dinny get angrier at ur life situations than u do are they even ur pals the colonization of everyday life by information Been another perfect day witchya, wanna lay witchya, spend my life witchyaaaa Maybe in another lifetime. We love woke people. Sometimes you go to the doctor & they have no answers -- but then life hands you a free meal voucher so things balance out. YOU'RE BEAUTIFUL, I CAN'T BELEIVE IT! NEVER STOP SMILING AND ALWAYS BELEIVE IN YOURSELF, I LOVE YOU. probably giving another boy love. Ps: He's not the one for you. u take the time u need gramps, u also hav a life other then yt no need to feel pressured <3 No wrong answers. Although there is a right one. We will bring new dimension to your communication and life. Quit looking at social media for answers about one's life bc I can guarantee you will not know anything about mine. Never laugh at people in **** situations....... you may be the one someday doing the **** shuffle thru life. Communication is so important in life. I really don't know what the future holds. Everything I have and do, I've created and done by and for myself. Kinda hurts now but it's gonna mean a lot in the future. Your only obligation in any lifetime is to be true to yourself. It really was another lifetime though. To think of how much I've grown in those years is incredible. So much progress made. LOOK AT ME NOW. Past is past. Just focus for future. i swear i can't explain how much better your life gets when you surround yourself with good energy. I can't fault Twitter for trying to make itself pretty instead of solving its catastrophic internal problems bc that's what I'm doing I don't know why I try and watch romance anime and then get surprised when I get sad and feel like **** about my life Enjoy the ocean wave But watch out for the bandits. I thought I knew the answers till the questions changed. #Life #LiveAlive Apparently past me knew this would be an issue for me and made my password "priceygarbage"`
let lifeText = `Love, laughter & communication are the three essentials to good life, never let them fade. its tiring to see em against your opinion regarding this issue. A lifetime of judgment  makes me feel guilty - like people are watching me if I pick up something bad. not to dictate your life but drop your **** friends. It isn't easy to admit you're wrong, but the planetary aspects can boost your courage. Rather than stew with regret, meet with the person to make amends. He learned very early in life how to be a dirtbag, one thing I learned is you can't go through life like that… If you're unhappy in life, then you have to DO something major to change it: -Move -Breakup/Get divorced -Quit your job.  From modern-day hustle and bustle to the serenity of the past #romance #timetravel. How much of your life have you tried to fit in while feeling like you didn’t? song finds the words to express what i've been feeling for a lifetime - the power art has to make you feel understood. You can't expect someone to stay in your life if you're doing nothing but hurting them. Retweet to bless someone's timeline. Try not to get too worked up over other people's actions that don't concern you. No matter how good or bad you think life is, wake up each day and be thankful - Someone somewhere else is fighting. Stay strong: the future may seem uncertain but you will come out the other side. It may have tough timing. I never think of the future - it comes soon enough. There are only two options regarding commitment; you're in or you're out - There's no such thing as life in-between... Waiting for that future tho... 🔥 . Life is like a camera - Focus on what's important, Capture the good times, Get rid of the negatives. The pain and trials you go through now will make a great story in the future. Instead of looking down on people inspire someone, change someone's life for the better, encourage someone to reach HIGHER. I just be tweeting don't try to puzzle my life together lol. Everything has a frequency, and whatever you're feeling is bringing everything into your life that's on a similar wavelength. if ur pals dinny get angrier at ur life situations than u do are they even ur pals? Been another perfect day witchya, wanna lay witchya, spend my life witchyaaaa. Maybe in another lifetime. We love woke people. Sometimes you go to the doctor & they have no answers -- but then life hands you a free meal voucher so things balance out. YOU'RE BEAUTIFUL, I CAN'T BELEIVE IT! NEVER STOP SMILING AND ALWAYS BELEIVE IN YOURSELF, I LOVE YOU. probably giving another boy love. Ps: He's not the one for you. u take the time u need gramps, u also hav a life other then yt no need to feel pressured <3 . No wrong answers; Although there is a right one. We will bring new dimension to your communication and life. Quit looking at social media for answers about one's life bc I can guarantee you will not know anything about mine. If you're spending time with strangers or acquaintances, a getting-to-know-you session might be in order. A sweet, self-effacing approach is twice as likely to succeed as a bold, bulldozing one. Even if something's old news to you, it might be best to pretend that you're somewhat surprised. Never laugh at people in **** situations - you may be the one someday doing the **** shuffle thru life. Communication is so important in life. I really don't know what the future holds. Everything I have and do, I've created and done by and for myself. Kinda hurts now but it's gonna mean a lot in the future. Your only obligation in any lifetime is to be true to yourself. It really was another lifetime though; to think of how much I've grown in those years is incredible. So much progress made - LOOK AT ME NOW. Past is past; Just focus for future. i swear i can't explain how much better your life gets when you surround yourself with good energy. I can't fault Twitter for trying to make itself pretty instead of solving its catastrophic internal problems bc that's what I'm doing. I don't know why I try and watch romance anime and then get surprised when I get sad and feel like **** about my life. Enjoy the ocean wave But watch out for the bandits. I thought I knew the answers till the questions changed. Apparently past me knew this would be an issue for me and made my password "priceygarbage". Today may be the exception. The aspects can bring real strength to your communication abilities. You'd be wise to seize the opportunity. Take steps to express your feelings by initiating conversations. Words will come much more easily than usual. If there are problems to handle, you will likely find resolutions. `;
markovLife.loadText(lifeText);

let markovLove = new rita.RiMarkov(3);
let loveText = `Communication + Trust = A relationship that will last a lifetime. Past is past. Just focus for future. You gotta mix things up and keep things interesting, especially in the bedroom. U didn't love me or fear loosing me u just ****** UP something good u had going in ur life. People can fall in love, get engaged and plan a life together on a GT Bank customer service queue. Respect everyone, hate no one and most importantly love yourself. I love you - Thanks! Romance is very much a matter of humor, especially with the current astral energy. Although you are more concerned with image and looks than with making others laugh, it is your particular approach to life that seems to have someone really gorgeous in stitches. We can criticize good people for doing bad things. Lack of communication can ruin a lot of good situations. Don't love me with words, love me with actions!! Instead we should be there for one another, show our love. Prom is the epitome of a relationship where you feel pressured because you’re not growing at the rate your lover wants you to. Without communication, there's no relationship; Without respect, there is no love; Without trust, there's...... Can these two strangers survive together? The amount of comments I have received regarding prom blows my mind 😭 I love you all so much💕. God is preparing you for the person praying you into their life; He will connect you! It takes a second to say I love you, but actions to show it. A kiss is only a kiss until it means something it meant something. Beautiful girl = good attitude + nice smile + good communication. She will be a good lover for boy who loves her. Right now, your differences -- not your similarities -- are the things that will help produce a better relationship, so savor the clash of personalities. See where it gives you new opportunities in this situation. I will never in my life trust another dude. Another chapter of my life began since i met you. someone out there will eventually love my ugly ass one day. The worst; Especially when you know that yall can't even get back together. SURPRISE YOURSELF 😜 Everyone needs a little romance. remember; the failure of connections does not dictate your worth. you are not a representation of lovers who could not. No wrong answers, Although there is a right one. Love is wanting that person to be happy no matter what even if you've to walk away and let him be. I really don't know what the future holds. Y'all better stop letting people dictat ya life smh suckas. I want another one, I love her. It was the little coincidences that brought them together for a lifetime. someone i love: *doesnt talk to me all day*. you can't build a relationship on "promises", you gotta build that **** with love, loyalty, effort. I do like romance as well but could we skip the ******* and cuddle instead? We waste time looking for the perfect lover, instead of creating the perfect love. I hate when I meet my future husband and he doesn't ask for my number. What they say about all work and no play just doesn't apply to you right now. You're likely to be exceptionally involved with career matters -- yet you're looking hot and getting lots of attention while you're at it. `;
markovLove.loadText(loveText);

let markovCareer = new rita.RiMarkov(3);
let careerText = `being an entrepreneur is highly pressured but I'm less stressed now that I'm my own boss; Different. HOPE SOMETHING BETTER AND BIGGER WILL HAPPEN TO HIS CAREER THIS YEAR; HE DESERVES SO SO SO MUCH MORE. Will you be the spark that helps light the fire!? I'm not saying every dude who's broke but some gonna get it right. Don't let the Internet dictate how you're gonna evolve with your lover. Don't expect to make your fortune today, especially if you don't work alone. You have no patience for monkeying around, but it's hard to get others to stay focused on anything but play. You can try going it alone or simply give in and start your weekend early. Get a supporting partner to push the hustle together. You have disappointed me, now I have doubts on your career. It's time to stop saying 'should' and start planning ahead. This floor is someone's business. When your actions arent driven by strictly *** desires & currency, you will begin to find your true purpose. Everything I have and do, I've created and done by and for myself; Kinda hurts now but it's gonna mean a lot in the future. Look at the skill you've acquired and not just the field you're pigeonholed into. Past is past - Just focus for future. plenty people without jobs that got a hustle. having conversations with 3 people - I feel like a business person. Are you an #Entrepreneur and want an online community with 1400 like minded people? Check out CEO sharing career tips, tricks + stories. Perhaps they should've picked a different profession then? Things are somehow different today, even though your regular schedule is unfolding as it should. That little feeling that things have changed will nag you all day long - unless you find its source. It has to do with money. If your career choice is that terrible, fix it. Your use of the word penalty is intentionally misleading. the change needed regarding these panels is regulatory, not political. Especially if we ignore him saying he did it. If anyone knows something about what's going on there - hit me. Be kind - no matter your profession (yes, including/especially law and business!), seek to understand. Well done we might see you in a professional capacity. Regarding that tweet from yesterday that you have now deleted - You're a disgrace to your profession. mind your business, make your money & i can promise you... your life will be better instead of worrying about others. No wrong answers; Although there is a right one. There will be many events in the future that will shake weak hands - the key is to be prepared for those events. I really don't know what the future holds. Your brilliant ideas are just that - brilliant. Don't be afraid to be shot down. People will be impressed with what you've come up with but not with your lack of initiative. Speaking up is your first step.  This summer spend some time thinking seriously about the great possibilities your future holds. This career coach advises that if you truly care about growing, you have to put yourself in challenging situations. Want to get ahead on your application? Are college students pressured into a one-size-fits-all career track? People who lead private lives are the happiest - never feeling the need to prove anything to anyone. Feeling stressed out by work? Don't assume retirement will automatically resolve the situation. As long as I make my OWN money can't no ***** or ***** dictate **** in my life period! With 90% unemployment, seems y'all need to work on y'all's vocation instead of telling other what they need to do. Actually, "internet fuckboy" as you call yourself, I happen to love my profession and all aspects of my life. A valuable insight can be gained by changing the way you look at things. You can start a coding career without a degree - here's how! Why talented employees leave: 1 direct manager 2 no career growth 3 low salary 4 poor communication 5 meaningless projects 6 no recognition. At a Career Crossroads? Don't Let 'Should' Dictate Your Career. Your pride thwarts all efforts to function today, or so it feels. Every interaction is like a clash of the titans. Keep your ego in check if you want to avoid being overthrown by a younger, stronger god. `;
markovCareer.loadText(careerText);

app.get('/', function (req, res, next) {
  let lifeSentences = markovLife.generateSentences(5);
  let loveSentences = markovLove.generateSentences(5);
  let careerSentences = markovCareer.generateSentences(5);
  let sentences = {
    life: lifeSentences,
    love: loveSentences,
    career: careerSentences
  }
  console.log("LIFE??????", lifeSentences);
  console.log("LOVE??????", loveSentences);
  console.log("CAREER??????", careerSentences);
  // let sentences = []
  // for (let i = 0; i<5; i++) {
  //   let newSentance = rmLife.generateSentences(1)
  //   sentences.push(newSentance[0])
  // }
  res.status(200).send(sentences)
});



module.exports = app
