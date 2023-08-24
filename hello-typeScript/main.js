// javaScript puro
var minhaVar = 'Minha Variavel';
function minhaFuncao(x, y) {
    return x + y;
}
// ES 6 ES 2015, ES 6 feacture.org codigo dos arquivos de type script.
var num = 2;
var PI = 3.14;
// declaracao de variavel
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
// arrow functions, ES 6
numeros.map(function (valor) { return valor * 2; });
// tranpiler babel para transpilar o ES 6 em codigo javascript puro
// classe
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    // metodo
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
// definicao do tipo de classe
// var n1: string = 'sdfsdf';
var n1 = 'sdfsdf'; //any qualquer tipo
n1 = 4;
// se for tipagem diferente ele nao aceita um numero nao pode ser atribuido em uma tipagem string
