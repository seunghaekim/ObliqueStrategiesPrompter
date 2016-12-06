function rnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// for local works.
var prefix = "https://raw.githubusercontent.com/seunghaekim/ObliqueStrategiesPrompter/master/json/";

// for gitpage
// var prefix ="../json/";

var decks = [
    "obliqstradge.ed1.json",
    "obliqstradge.ed2.json",
    "obliqstradge.ed3.json",
    "obliqstradge.ed4.json",
];

function rnd_deck (put) {
    return put[rnd(0, put.length)];
}

var deck = rnd_deck(decks);

$(document).ready(function(){
    $.getJSON(prefix + deck, function(result) {
        deck_info = "The Oblique Strategies " + "<span class=\"--upper\">" + deck.split(".")[1] + "</span>";
        rnd_card = rnd(0, result.deck.length);
        acard = result.deck[rnd_card].en;
        copyright = result.copyright;
        preamble = "Copyright Message from <a href=\"http://www.rtqe.net/ObliqueStrategies/\">Origin Website</a>: ";

        $( "#deck_info" ).append(deck_info);
        $( "#card" ).append("<h1>"+acard+"<h1>");
        $( ".deck" ).append(copyright.deck);
        $( ".website" ).append(preamble+copyright.website);
    })
})
