import ed1 from './decks/ed1'
import ed2 from './decks/ed2'
import ed3 from './decks/ed3'
import ed4 from './decks/ed4'

const defaultCardFactory = (deck) => {
  return Object.assign({
    en: undefined,
    ko: undefined,
    bgi: undefined
  }, deck)
}

const decks = { ed1, ed2, ed3, ed4 }

const deckKeys = Object.keys(decks)

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const getRandomIdx = (min, max) => {
  let deckIdx = getRandomInt(0, deckKeys.length)
  let deck = decks[deckKeys[deckIdx]]
  let cardIdx = getRandomInt(0, deck.deck.length)
  return [deckIdx, cardIdx].join('.')
}

const getDeck = (id=0) => {
  let idxArr = id.split('.')
  let deckIdx = idxArr[0]
  let cardIdx = idxArr[1]

  let deck = decks[deckKeys[deckIdx]]

  return {
    ed: deckKeys[deckIdx],
    copyright: deck.copyright,
    card: deck.deck[cardIdx]
  }
}

export default {
  defaultCardFactory,
  getRandomIdx,
  decks,
  deck: getDeck
}