export type Animal = {
    nome: string;
    peso: number;
    idade: number
  }

  
  function mostraAnimal(animal:Animal){
    
    console.log(animal);
   
  }
  const ani = {nome:'Elefante', peso:2000, idade:100};
  mostraAnimal({nome:'Elefante', peso:2000, idade:100});

  interface LabeledValue {
    label: string;
  }
  
  function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
  }
  let myobj = {label:'TESTE'};
printLabel(myobj);  
   
  
  