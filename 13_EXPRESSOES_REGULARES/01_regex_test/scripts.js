const reg1 = new RegExp('Futebol');

console.log(reg1.test("Tem Futebol?"));
console.log(reg1.test("Não tem"));


const reg2 = /FF/;

let text = 'Tem FF na PlayStore'

console.log(reg2.test("Tem FF?"));
console.log(reg2.test("Não tem"));
console.log(reg2.test(text));

console.log(/quadrado/.test("Onde tem um quadrado"));
console.log(/quadrado/.test("222quadrado222"));