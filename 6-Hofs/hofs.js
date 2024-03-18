// Map
let numeros = [1, 2, 3];
let dobrados = numeros.map(function(numero) {
  return numero * 2;
});
console.log(dobrados); // [2, 4, 6]

// Filter
let pares = numeros.filter(function(numero) {
  return numero % 2 === 0;
});
console.log(pares); // [2]

// Reduce
let soma = numeros.reduce(function(acumulador, numero) {
  return acumulador + numero;
}, 0);
console.log(soma); // 6