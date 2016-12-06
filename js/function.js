var request = require('request'),
    cheerio = require('cheerio');

var query = "Just+carry+on",
    base = "http://imgur.com/search?q=",
    url = base + query;


console.log(url);
