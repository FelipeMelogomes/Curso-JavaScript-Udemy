const cep = /\d{5}-\d{3}/;      // Validação de CEPs

console.log(cep.test("12345-222"));
console.log(cep.test("asdadsadasd"));

const tel = /\(\d{2}\)\d{4,5}-\d{4}/;       // Validação de telefones

console.log(tel.test("(64)99299-6901"));
console.log(tel.test("(64)9929-6901"));