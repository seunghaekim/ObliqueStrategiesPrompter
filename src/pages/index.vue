<template>
<div class="prompter">
  <div id="deck_info">{{ deck_name }}</div>
  <div id="card" class="--vhcenter">
    <h1><span class="__whitebackground __eng">{{ card }}</span></h1>
  </div>
  <div id="copyright" class="--hfull">
    <ul id="credit">
      <li class="deck"> {{copyright.deck}} </li>
      <li class="website"> {{copyright.website}} </li>
    </ul>
  </div>
</div>
</template>

<script>
import obdeck from '@/oblique-strategies'

export default {
  name: 'Prompter',
  computed: {
    deck_name () {
      return `The Oblique Strategies, ${obdeck.ed}`
    },
    card () {
      return obdeck.card.en
    },
    copyright () {
      return obdeck.deck.copyright
    }
  }
}
</script>

<style lang="css">

body {
    font-family: 'Libre Baskerville', 'KoPub Batang', serif;
    background-size: 101vmax;
}

#deck_info,
#copyright {
    font-size: 0.7em;
}

#deck_info {
    width: 15em;
    margin: 1%;
}

#card {
    width: 80%;
    height: 30%;
    text-align: center;
}

#card h1 {
    width: 98%;
    height: 0%;
    font-size: 4em;
    line-height: 119%;
    letter-spacing: -0.03em;
}

.__whitebackground {
    background-color: white;
    padding-left: 1%;
    padding-right: 1%;
}

#copyright {
    text-align: center;

}

#copyright li {
    display: inline;
    margin: 0.2em;
}

#copyright li::after {
    content: " /";
    margin-left: 0.5em;
    color: red;
    font-weight:bolder;
}

#copyright li:last-child::after {
    content: none;
}

.deck,
.website {
    text-align: center;
}

.--vhcenter {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

.--hcenter {
    height: 50px;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: 0;
}

.--hfull {
    width: 100%;
    position: absolute;
    bottom: 0;
    margin-bottom: 1%;
}

.--upper {
    text-transform: uppercase;
}

</style>