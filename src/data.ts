
const htmlImage = require('./assets/html.png');
const cssImage = require('./assets/css.png');
const javascriptImage = require('./assets/javascript.png');
const typescriptImage = require('./assets/typescript.png');
const vueImage = require('./assets/vue.png');
const react = require('./assets/react.png');

interface cardDataInterface {
  id: number
  value: string
  show: boolean
}

const Cards: Array<cardDataInterface> = [
  { id: 1, value: htmlImage, show: false },
  { id: 2, value: cssImage, show: false },
  { id: 3, value: cssImage, show: false },
  { id: 4, value: htmlImage, show: false },
  { id: 5, value: javascriptImage, show: false },
  { id: 6, value: javascriptImage, show: false },
  { id: 7, value: typescriptImage, show: false },
  { id: 8, value: typescriptImage, show: false },
  { id: 9, value: vueImage, show: false },
  { id: 10, value: vueImage, show: false },
  { id: 11, value: react, show: false },
  { id: 12, value: react, show: false },
]

export default Cards