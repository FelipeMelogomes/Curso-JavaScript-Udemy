class Carro {
  constructor(marca, cor, galosinaRestante, consumo) {
    this.marca = marca;
    this.cor = cor;
    this.galosinaRestante = galosinaRestante;
    this.consumo = consumo;
  }

  dirigir(km) {

    let litrosConsumidos = km / this.consumo;

    this.galosinaRestante -= litrosConsumidos;

  }

  abastecer(l) {

    this.galosinaRestante += l;

  }

}

let carro = new Carro("VW", "Preto", 100, 14);

console.log(carro);

carro.dirigir(100);

console.log(carro);

carro.abastecer(10);

console.log(carro);