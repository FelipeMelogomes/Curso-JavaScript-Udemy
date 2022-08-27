const validaMarca = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(validaMarca.test("Marca: Nike"));
console.log(validaMarca.test("Marca: asdasda"));
console.log(validaMarca.test("Nike"));
console.log(validaMarca.test("Marca: 12312321"));