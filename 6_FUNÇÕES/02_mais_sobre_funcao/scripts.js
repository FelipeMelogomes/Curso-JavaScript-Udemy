function multiplicarTresNumeros(x, y, z) {
  return x * y * z;
}

console.log(multiplicarTresNumeros(2, 3, 6));

const mult = multiplicarTresNumeros(4, 2, 10);

console.log("O valor de mult é " + mult);

function podeDirigir(idade,cnh) {
  if(idade >= 18 && cnh == true) {
    console.log("Pode digirir!");
  } else {
    console.log("Não pode dirigir!");
  }
}

console.log(podeDirigir(19,true));
console.log(podeDirigir(30,false));
console.log(podeDirigir(17,false));