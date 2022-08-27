const validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test("felipemelogomes36@gmail.com"));
console.log(validarEmail.test("felipe@gmail"));
console.log(validarEmail.test("gmail.com"));
console.log(validarEmail.test("felipe@gmail.com.br"));