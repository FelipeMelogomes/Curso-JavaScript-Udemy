let onibus = {
  rodas: 8,
  limitePassageiros: 40,
  portas: 2,
  cor: "blue",
};

delete onibus.rodas; // deleta a propriedade rodas do objeto onibus.

console.log(onibus.rodas); // imprime no console para confirmar a exclusão da propriedade.

onibus.janela = 20; // adiciona a propriedade janela = 20 no objeto.

console.log(onibus); // imprime no console o objeto onibus com a nova propriedade janela.

console.log(onibus.janela) // imprima a propriedade janela no console.