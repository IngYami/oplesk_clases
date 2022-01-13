var colors = require('colors');

const nombres = [
    {nombre:"foo"},
    {nombre:"bar"},
    {nombre:"qux"},
    {nombre:"ram"}
   ];

  
   //****codigo for***** 
   console.log("utilizando FOR".red.underline.bold)
    for (i=0;i<nombres.length;i++){
        console.log((i + 1) + '-', 'nombre:', nombres[i]["nombre"]);
    };
    console.log(colors.yellow("* ").repeat(10));

   //*** codigo con map***
   console.log("utilizando MAP".green.underline.bold)
   nombres.map((b, idxs) => {
    console.log((idxs + 1) + '-', 'nombre:', b["nombre"]);
}); 

    //**codigo con while***
    console.log(colors.yellow("* ").repeat(10));
    console.log("utilizando WHILE".blue.underline.bold)
    let c = 0;
    let d = nombres.length;
    while (c<d){
        console.log((c + 1) + '-', 'nombre:', nombres[c]["nombre"]);
        c++;
    };

