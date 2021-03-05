import { NumberLiteralType, updateImportEqualsDeclaration } from "typescript";

export {}
let msg = 'Hello word!!!!';
console.log(msg);

let lista = ['Michel', 'Talissa', 'Jack'];
console.log(lista); 

function dobro(numero:number): number{
    return numero*2;
}

function triplo(numero:number): number{
    return numero*3;
}
console.log(dobro(12));

let numeros = [1,2,3,4,5,6];
let nrs = numeros.map(n => n*2);
let trip= numeros.map(triplo);
console.log('----LAMBDA numeros.map(n => n * 2)----------------------');
console.log(nrs);

console.log('--triplo----------------------');
console.log(trip);

export type usuario={
    cod: number;
    nome: string;
    senha: string;
}

usuario:{
    cod: 10;
    nome:'Michel';
    senha: 'qwe123'
};
//** filter = essa função filtro retorna somete se for verdadeiroa cada função criada por functin ou lambda */
function  par(x: number): boolean{

    return x % 2 == 0;
}

let numrs = [1,2,3,4,5,6,7,8,9,10,11];

let maiorq1 =numrs.filter(x => x > 1);
let numpar =numrs.filter(x => x % 2 == 0);
let filpar = par(10);

let numimpar =numrs.filter(x => x % 2 != 0);


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


const media = (n1: number, n2: number) => {
    return ((n1+n2)/2)
}

console.log(media(70,85));






