export default {
  srcDir: 'src/',
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-78070436-3 '
    }]
  ],
  css: [
    '~assets/css/reset.css'
  ],
  head: {
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: 'Oblique Strategies Prompter' },
      { title: 'Oblique Strategies Prompter'}
    ],
    link: [
      {rel: 'stylesheet', src: 'https://fonts.googleapis.com/css?family=Libre+Baskerville',},
      {rel: 'stylesheet', src: 'http://fonts.googleapis.com/earlyaccess/kopubbatang.css'},
    ]
  }
}