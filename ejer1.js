
   //mostrar por pantalla: "hola - mundo, desde vscode."

   const b = ["hola", "mundo", "desde", "vscode"];

   b.splice(1,0,"-");
   b.splice(3,0,",");
 for (var pPos = 0 ; pPos <= 4; pPos++){
 }
 
 let obt = b.map(function(options){
   return options.toUpperCase()
   })
 
 console.log (obt.join(' '))


 