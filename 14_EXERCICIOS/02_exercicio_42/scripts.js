const validarId = /\d+ID\b/;

console.log(validarId.test("34234242343ID"));
console.log(validarId.test("34234242343"));
console.log(validarId.test("aaaaaa"));
console.log(validarId.test("ID"))