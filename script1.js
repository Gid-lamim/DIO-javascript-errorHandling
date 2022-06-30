//criar uma função que receba um array e um número como parâmetros.

function validaArray (arr, num){

    //try irá executar o script. se houver erros, ele lançará o erro no catch.

    try {
        //se os parâmetros não tiverem sido enviados, lance um erro do tipo ReferenceError
        if(!arr || !num) throw new ReferenceError("Envie os parâmetros");

        //se o array não for um objeto, iremos lançar um TypeError.
        //   !==   -> significa diferente de
        if(typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object.");

        //se o número não for do tipo number, lance outro TypeError
        if (typeof num !== 'number') throw new TypeError("O segundo parâmetro precisa ser do tipo number");
        
        //se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
        if (arr.length !== num) throw new RangeError("Tamanho de Array inválido"); 

        //se nenhum desses erros forem encontrados, retorna o array.
        return arr;
    } catch(e){
        //o bloco catch lida com os erros encontrados.
        // iremos filtrar os erros e tomar uma ação para cada tipo de erro encontrado, usando o isntanceof

        console.log(`error found: ${e.message}`); 
        if (e instanceof ReferenceError){
            console.log("Este é um erro do tipo ReferenceError");
        } else if (e instanceof TypeError){
             console.log("Este é um erro do tipo TypeError");
        } else if (e instanceof RangeError){
             console.log("Este é um erro do tipo RangeError");
        } else {
            //se não for nenhum dos erros esperados, lançe a mensagem:
            console.log("Erro inesperado:" + e);
        }
            
    }

}


console.log("ReferenceError----------------------------------");
//first test -- empty parameters
console.log("validaArray()");
console.log(validaArray());

console.log("TypeError----------------------------------");
console.log("validaArray(a,2)");
console.log(validaArray("a",2));

console.log("TypeError----------------------------------");
console.log("validaArray([a],a)");
console.log(validaArray(["a"],"a"));

console.log("ReferenceError----------------------------------");
console.log("validaArray([a],2)");
console.log(validaArray(["a"],2));