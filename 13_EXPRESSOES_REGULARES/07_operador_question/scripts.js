const padrao = /Banan?a/;

console.log(padrao.test("Banana"));
console.log(padrao.test("Banaa"));

const padrao2 = /\d\w?/;

console.log(padrao2.test("12323"));
console.log(padrao2.test("1231321abcd"));
console.log(padrao2.test("  asdsadas123123 "))