"use strict";
exports.__esModule = true;
var msg = 'Hello word!!!!';
console.log(msg);
var lista = ['Michel', 'Talissa', 'Jack'];
console.log(lista);
function dobro(numero) {
    return numero * 2;
}
function triplo(numero) {
    return numero * 3;
}
console.log(dobro(12));
var numeros = [1, 2, 3, 4, 5, 6];
var nrs = numeros.map(function (n) { return n * 2; });
var trip = numeros.map(triplo);
console.log('----LAMBDA numeros.map(n => n * 2)----------------------');
console.log(nrs);
console.log('--triplo----------------------');
console.log(trip);
usuario: {
    cod: 10;
    nome: 'Michel';
    senha: 'qwe123';
}
;
//** filter = essa função filtro retorna somete se for verdadeiroa cada função criada por functin ou lambda */
function par(x) {
    return x % 2 == 0;
}
var numrs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var maiorq1 = numrs.filter(function (x) { return x > 1; });
var numpar = numrs.filter(function (x) { return x % 2 == 0; });
var filpar = par(10);
var numimpar = numrs.filter(function (x) { return x % 2 != 0; });
console.log('FILTER----------------------');
console.log('maior que 1----------------------');
console.log(maiorq1);
console.log('Numeros pares----------------------');
console.log(numpar);
console.log('Numeros impares----------------------');
console.log(numimpar);
console.log('Numero e par?----------------------');
console.log(filpar);
console.log(par(1151));
