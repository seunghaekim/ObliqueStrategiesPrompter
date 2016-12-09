function rnd(min, max) {
    return Math.floor(Math.random() * (max - 1)) + min;
}

function rnd_deck (put) {
    return put[rnd(0, put.length)];
}


// for local works.
var prefix = "https://raw.githubusercontent.com/seunghaekim/ObliqueStrategiesPrompter/master/json/";

// for gitpage
// var prefix ="../json/";

// var decks = [
//     "obliqstradge.ed1.json",
//     "obliqstradge.ed2.json",
//     "obliqstradge.ed3.json",
//     "obliqstradge.ed4.json",
// ];


// var deck = rnd_deck(decks);
var deck = "obliqstradge.json";

$(document).ready(function(){
    $.getJSON(prefix + deck, function(result) {
        deck_info = "The Oblique Strategies";
        rnd_card = rnd(0, result.deck.length);

        if (result.deck[rnd_card].ko) {
            acard = result.deck[rnd_card].ko;
            card = "<h1><span class=\"__whitebackground __kor\">"+acard+"</span><h1>";

            translator = {
                "name": "Seunghae KIM",
                "url": "https://seunghaekim.github.io"
            };
            translator.linked = "<a href=\""+translator.url+"\">"+translator.name+"</a>";
            translator.message = "Translated by "+translator.linked;
            translator.tagged = "<li class=\"translator\">"+translator.message+"</li>";

        } else {
            acard = result.deck[rnd_card].en;
            card = "<h1><span class=\"__whitebackground __eng\">"+acard+"</span><h1>"
        }

        copyright = result.copyright;
        preamble = "Copyright Message from <a href=\"http://www.rtqe.net/ObliqueStrategies/\">Origin Website</a>: ";

        $( "#deck_info" ).append(deck_info);
        $( "#card" ).append(card);
        $( ".deck" ).append(copyright.deck);
        $( ".website" ).append(preamble+copyright.website);
        $( "#credit" ).append(translator.tagged);
        $( "body" ).css({'background-image':'url('+result.deck[rnd_card].bgi+')'})
    })

})
