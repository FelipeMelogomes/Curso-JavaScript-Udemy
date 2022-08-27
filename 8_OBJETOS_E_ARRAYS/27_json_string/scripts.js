let pessoa = {
  "nome": "Matheus",
  "idade": 28,
  "profissao": "Programador",
  "hobbies": ["Video game", "Leitura", "Correr"]
}

let pessoaTexto = JSON.stringify(pessoa); // Converter JSON para string.

console.log(pessoaTexto);
// console.log(pessoaTexto.nome);

let pessoaJSON = JSON.parse(pessoaTexto); // Converter string para JSON.
console.log(pessoaJSON);

console.log(pessoaJSON.hobbies[0]);

