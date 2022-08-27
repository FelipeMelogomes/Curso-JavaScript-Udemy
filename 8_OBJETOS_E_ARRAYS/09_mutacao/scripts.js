let pessoa = {
  nome: 'felipe',
}

let pessoa2 = pessoa;


console.log(pessoa == pessoa2);

let pessoa3 = {
  nome: 'felipe',
}

console.log(pessoa == pessoa2);
console.log(pessoa3 == pessoa);
console.log(pessoa3 == pessoa2);


pessoa2.nome = "Felipe";


console.log(pessoa.nome);


pessoa.nome = "Maria";

console.log(pessoa2.nome);