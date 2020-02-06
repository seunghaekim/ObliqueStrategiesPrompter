import './assets/css/reset.css'
import './assets/css/style.css'
import obdecks from './oblique-strategies'

const deckId = obdecks.getRandomIdx()
const deck = obdecks.deck(deckId)

document.getElementById('deck_info').innerHTML = `The Oblique Strategies, ${deck.ed}`
document.getElementById('card').innerHTML = deck.card.en
document.getElementById('credit--deck').innerHTML = deck.copyright.deck
document.getElementById('credit--website').innerHTML = deck.copyright.website