//criar uma função que receba um array e um número como parâmetros.

function validaArray (arr, num){
    //se os parâmetros não tiverem sido enviados, lance um erro do tipo ReferenceError
    if(!arr || !num) throw new ReferenceError("Envie os parâmetros");

    //se o array não for um objeto, iremos lançar um TypeError.
    if(typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object.");
}

console.log(validaArray(2,2));
