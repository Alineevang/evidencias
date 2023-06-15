function reversestring(str) {
    return str.split("").reverse().join("");
} 

const frase = "Aline Evangelista Da Silva";

console.log(reversestring(frase));


//O método split() divide um objeto de string em um array de string separando a string em substrings.
//O método reverse() inverte um array diretamente. ...
//O método join() une todos os elementos de um array em uma string.