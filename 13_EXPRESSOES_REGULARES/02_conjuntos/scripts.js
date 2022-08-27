const reg1 = /[1,2,3,4,5,6,7,8,9,10,22]/;

console.log(reg1.test("Temos o número 10"));
console.log(reg1.test("Temos o número 1"));
console.log(reg1.test("Temos o número 22"));


const reg2 = /[0-9]/;

console.log(reg2.test("Temos o número 65"));