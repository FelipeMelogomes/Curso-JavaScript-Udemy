const validarMaiuscula = /[A-Z]/

console.log(validarMaiuscula.test("A FRASE É MAIUSCULA!")); // True
console.log(validarMaiuscula.test("a frase é minuscula!")); // False
console.log(validarMaiuscula.test("12313213")); // False