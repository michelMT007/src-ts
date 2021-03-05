function logParametros(a, b, c){
    console.log(a, b, c);
}
logParametros(1, 2 ,3)

logParametros(1, 2 ,3, 4, 5)

logParametros(1, 2 )

function defaultParametros(a=0, b=0, c=0){
    console.log(a, b, c);
}

defaultParametros(1,2 )

function imprimiNums(nums){

    for(let n of nums){
        if(n%2 == 0){
            console.log('-----PAR---------------------------')
            console.log(n)    
        }else{
            console.log('---IMPAR---------------------------')
            console.log(n)
        }
        console.log('--------------------------------------')
        
    }
}
console.log('--------------------------------------')
const arrayNumeros=[1, 2, 3 , 45, 23, 36, 2, 23 ,25, 5, 4, 2 ,47, 25, 0];
imprimiNums(arrayNumeros);

 // esse 3 posntinhos torna a variavel em ARRAY
function somaNums(...numerosarray){
    let total =0;
    for(let n of numerosarray){
        total += n;
    }
    console.log('-TOTAL DA SOMA ------------------')
    console.log(total);
}

somaNums(1,2,3 ,35, 32, 14, 15, 37, 45, 73, 99, 120, 500, 12454, 0);