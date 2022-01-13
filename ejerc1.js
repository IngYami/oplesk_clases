
var colors = require('colors');
const a = ["foo", "alfa", "ram"];
// seleccionar las primeras letras de los 3 elementos
//y mostrar: "far"

let palabra = a.map(function(firts) {
    return firts[0]
})

console.log (palabra.join("").toUpperCase().red)