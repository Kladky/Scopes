# Scopes

The basic idea:

1. Humans look for patterns and meaning in everything. When they don't find these things, they make them up.
2. Humans like to share trite, generic advice online.
3. Probably selected tweets collaged together could sometimes be as meaningful as a "real" horoscopes?

This site generates a horoscope based on tweets

## Live tweets

The live tweet view shows a selection of tweets pulled from a live twitter search and lightly filtered. The search is made using two random horoscope keywords to turn up tweets that have a horoscope sound. Then, each tweet is filtered to screen for forbidden words, remove noise like links and @s, and generally clean things up.

My original idea was to search for these tweets on the fly and then compose them into longer horoscope texts, but I found two problems with this approach:

1. Obvi there are a lot of different kinds of conversations on twitter, and I found that even with my horoscope keywords, a lot of tweets I found contained content that didn't match aesthetically with my idea.
2. The time it took to find and filter tweets, and then load them into a Markov chain, and then generate a horoscope text was non-trivial.

## Markov chain

In the expanded view, you can see longer horoscope texts. These are based on tweets I found through the method above, as well as real horoscope texts. The output is composed using a markov chain.

# Check it out: https://twitterscopes.herokuapp.com
