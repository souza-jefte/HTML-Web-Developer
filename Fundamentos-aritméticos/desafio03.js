let valor1 = parseInt(gets());
let valor2 = parseInt(gets());
let valor3 = parseInt(gets());
let valor4 = parseInt(gets());
let valor5 = parseInt(gets());

let numeros = [];
numeros.push(valor1, valor2, valor3, valor4, valor5);

let qntPar = 0, qntImpar = 0, qntPos = 0, qntNeg = 0;
for (const item of numeros) {
  if (item > 0) {
    qntPos++;
  }
  else if (item < 0) {
    qntNeg++;
  }

  if (item % 2 == 0) {
    qntPar++;
  }
  else {
    qntImpar++;
  }
}

console.log(`${qntPar} valor(es) par(es)`);
console.log(`${qntImpar} valor(es) impar(es)`);
console.log(`${qntPos} valor(es) positivo(s)`);
console.log(`${qntNeg} valor(es) negativo(s)`);

