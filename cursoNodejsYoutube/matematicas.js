const Math = {};

function add (x1, x2){

    return x1 + x2;
}


function substract (x1, x2){

    return x1 - x2;
}

function multiply (x1, x2){

    return x1 * x2;

}

function divide (x1, x2){

   if (x2== 0) {
       console.log("no se puede dividir por cero");
       
   }else{
       return x1 / x2;
   } 

}

Math.add = add;
Math.substract = substract;
Math.divide = divide;
Math.multiply = multiply;

function hello(name){
    console.log('Hola', name);
}

//module.exports = hello;//aqui estamos exportando una sola funcion , el module.exports permite exportar todo eso , el module.exports permite exportar todo eso

module.exports = Math; //aqui se esta exportando el objeto generado 
/*exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;*/