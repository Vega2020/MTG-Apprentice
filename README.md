# MTG Spellbook

# overview

This app is a reference for building and upgrading decks.

AS A magic the gathering player who builds a lot of decks

I WANT a resource that will show me upgrades for cards I type in, suggest the best cards for a given purpose, and make deckbuilding faster and easier by letting me select packages of utility cards such as ramp, removal etc.

SO THAT I can make my decks more powerful, and quickly assemble templates to spend more of my deckbuilding time looking at fun exotic cards.

# goals

WHEN I load the page,
THEN I see a search bar, a selection of decks, maybe a card of the day or something

WHEN I search for a card or keyword,
THEN that card and related cards/a selection of cards related to that keyword show up in the display


# objectives

load in mtgJSON with functions to retrieve cards by name and keyword

create function to save deck to local storage as a string or object, and to load and display them
    clicking on a deck should bring up a list of cards, and clicking on a card should bring up details including a list of similar cards.

eventually, add code so that the search does not display cards that are already included in the currently loaded deck

add code to put entire packages (ramp, removal etc) into the deck at once and auto-suggest replacements to overwrite (could be based on card rating, mtgJSON already includes edh rating info).

selected cards go in the top div of the right column; in a div below, populate five related cards with the same color identity



# eventual features

proxy generator function - populate simple text proxies to finish your deck

tcg shopper - fill a tcgplayer cart with cards to complete a deck