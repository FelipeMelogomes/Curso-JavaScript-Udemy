const pontoRegex = /./;

// '.' Aceita qualquer coisa que esteja dentro de 'teste'


console.log('.');
console.log(pontoRegex.test("asd"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("123"));
console.log(pontoRegex.test("123asd"));

const dRegex = /\d/;    // [0-9]

// 'd' Aceita qualquer digito "Número"


console.log('d');
console.log(dRegex.test("asd"));
console.log(dRegex.test(" "));
console.log(dRegex.test("123"));
console.log(dRegex.test("123asd"));


const dRegex2 = /\D/;   // [^0-9]


console.log('D');
console.log(dRegex2.test("asd"));
console.log(dRegex2.test(" "));
console.log(dRegex2.test("123"));
console.log(dRegex2.test("123asd"));


const sRegex = /\s/;   

// 's'  Aceita apenas spaço, quebras de linhas ou tabs


console.log('s');
console.log(sRegex.test("asd"));
console.log(sRegex.test(" "));
console.log(sRegex.test("123"));
console.log(sRegex.test("123asd"));


const wRegex = /\w/;   

// 'w'  Aceita apenas números e letras


console.log('w');
console.log(wRegex.test("asd"));
console.log(wRegex.test(" "));
console.log(wRegex.test("123"));
console.log(wRegex.test("123asd"));







