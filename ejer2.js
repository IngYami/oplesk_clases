
   //mostrar por pantalla: "hola - mundo, desde vscode."

   var colors = require('colors');
   const b = ["hola", "mundo", "desde", "vscode"];

   b.splice(1,0,"-");
   b.splice(3,0,",");
 
 let obt = b.map(function(options){
   return options.toUpperCase()
   })
 
 console.log (obt.join(' ').green)