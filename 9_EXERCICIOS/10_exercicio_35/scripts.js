const  calculadora = {
  soma: function(a, b){
    return a + b;
  },
  subtrair: function(a, b){
    return a - b;
  },
  multiplicar: function(a, b){
    return a * b;
  },
  dividir: function(a, b){
    return a / b;
  }
}

// Imprimindo os valores no console.

console.log(calculadora.soma(10, 10)); // resultado : 20
console.log(calculadora.subtrair(10, 10)); // resultado : 0
console.log(calculadora.multiplicar(10, 10)); // resultado : 100
console.log(calculadora.dividir(10, 2)); // resultado : 5
