// javaScript puro
var minhaVar = 'Minha Variavel';
function minhaFuncao(x, y) {
    return x + y;
}
// ES 6 ES 2015, ES 6 feacture.org codigo dos arquivos de type script.
let num = 2;
const PI = 3.14;
// declaracao de variavel

var numeros = [1, 2, 3];
numeros.map(function(valor){
    return valor * 2;
});
// arrow functions, ES 6
numeros.map(valor => valor * 2);
// tranpiler babel para transpilar o ES 6 em codigo javascript puro

// classe
class Matematica {
    // metodo
    soma(x, y){
        return x + y;
    }
}

// definicao do tipo de classe
// var n1: string = 'sdfsdf';
var n1: any = 'sdfsdf'; //any qualquer tipo
n1 = 4;
// se for tipagem diferente ele nao aceita um numero nao pode ser atribuido em uma tipagem string

