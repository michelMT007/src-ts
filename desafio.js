// cruiar uma funcao range, intervalo... Diferentes tipos de parametros 

/**
 * 
 * for (i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}} inicio 
 * @param {*} fim 
 * @param {*} intervalo 
 */
function imprimirRange(inicio, fim, intervalo){

    if(inicio !=undefined && fim !=undefined && intervalo !=undefined) {
        console.log('3 PARAMETROS___________________');
        for(i =inicio; i<= fim; i=i+intervalo ){
            console.log(i);
        }
    }
    if(inicio !=undefined && fim !=undefined && intervalo ==undefined) {
        console.log('---- 2 PARAMETROS___________________');
        for(i =inicio; i<= fim; i=i+  1 ){
            console.log(i);
        }
    }
    if(inicio !=undefined && fim ==undefined && intervalo ==undefined) {
        console.log('---- 1 PARAMETROS');
        for(i =0; i<= inicio; i=i+1){
            console.log(i);
        }

    }
}        

imprimirRange(10,100,2);  
































