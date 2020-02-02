export default {
  srcDir: 'src/',
  // buildModules: [
  //   ['@nuxtjs/google-analytics', {
  //     id: 'UA-78070436-7'
  //   }]
  // ],
  css: [
    '~assets/css/reset.css'
  ],
  head: {
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: 'javascript port of automatic_insurrection' },
      { title: 'Automatic Insurrection js'}
    ],
    link: [
      {rel: 'stylesheet', src: 'https://fonts.googleapis.com/css?family=Libre+Baskerville',},
      {rel: 'stylesheet', src: 'http://fonts.googleapis.com/earlyaccess/kopubbatang.css'},
    ]
  }
}