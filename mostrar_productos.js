var colors = require('colors');

const {productos} = require ('./productos');
const {precios} = require ('./precios');

console.log (colors.red.underline.bold('PRODUCTOS'))
for (var lista = 0; lista <= 3; lista++)
console.log ( productos[lista].toUpperCase(),'=', precios[lista].blue.bold)