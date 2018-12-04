const fs = require('fs');

fs.readFile('./texto.txt', function(err, data)  {
    if (err) {
        console.log(err);
        
    }
    console.log(data.toString());
    
});

/*fs.writeFile('./texto.txt', 'Linea 1', function(err){
    if (err) {
        console.log(err);
        
    }
    console.log('Archivo creado');

}); *///esta funcion va a generar un nuevo archivo txt con el contenido "Linea 1"

/*const os = require('os'); //est modulo me permite interactuar con el ssistema operativo

console.log(os.platform(), 'plataforma');
console.log(os.release(), 'release');
console.log(os.freemem(), 'memoria libre');

console.log(os.totalmem(), 'memoria total');*/
