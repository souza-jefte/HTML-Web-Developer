let valor1 = parseFloat(gets());
let valor2 = parseFloat(gets());
let valor3 = parseFloat(gets());
let valor4 = parseFloat(gets());
let valor5 = parseFloat(gets());
let valor6 = parseFloat(gets());

let numeros = [];
numeros.push(valor1,valor2,valor3,valor4,valor5,valor6);

let qnt=0;
for(const item of numeros){
  if(item > 0){
    qnt++;
    
  }
}

console.log(`${qnt} valores positivos`);