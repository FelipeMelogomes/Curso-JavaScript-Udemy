const notab = /[^ab]/;

console.log(notab.test("a"));
console.log(notab.test("Aqui tem a"));

const nottaz = /[^a-z]/;

console.log(nottaz.test("123 as"));
console.log(nottaz.test("azasadada"))

const az = /[a-z]/;

console.log(az.test("asadasdasd123123"));

