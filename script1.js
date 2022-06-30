//criar uma função que receba um array e um número como parâmetros.

function validaArray (arr, num){
    //se os parâmetros não tiverem sido enviados, lance um erro do tipo ReferenceError
    if(!arr || !num) throw new ReferenceError("Envie os parâmetros");

    //se o array não for um objeto, iremos lançar um TypeError.
    //   !==   -> significa diferente de
    if(typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object.");

    //se o número não for do tipo number, lance outro TypeError
    if (typeof num !== 'number') throw new TypeError("O segundo parâmetro precisa ser do tipo number");
    
    //se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
    if (arr.length !== num) throw new RangeError("Tamanho de Array inválido"); 
}

console.log(validaArray([2],2));
