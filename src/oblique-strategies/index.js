import ed1 from './decks/ed1'
import ed2 from './decks/ed2'
import ed3 from './decks/ed3'
import ed4 from './decks/ed4'

const random_element = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)]
}

const defaultCardFactory = (deck) => {
  return Object.assign({
    en: undefined,
    ko: undefined,
    bgi: undefined
  }, deck)
}

const decks = { ed1, ed2, ed3, ed4 }
const deck_key = random_element(Object.keys(decks))

const deck = decks[deck_key]

export default {
  ed: deck_key,
  decks,
  deck,
  card: defaultCardFactory(random_element(deck.deck))
}