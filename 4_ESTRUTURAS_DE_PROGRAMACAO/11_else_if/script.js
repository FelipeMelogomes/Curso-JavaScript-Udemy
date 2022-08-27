// Estrutura de controle: else if

let nome = "Felipe";
let idade = 28;

if (nome != undefined && nome == "Matheus") {
    console.log("Nome não está definido");
} else if (nome == "Felipe" && nome.length > 5 && idade == 50) {
    console.log("O nome é Felipe");
} else {
    console.log("Não é Felipe!");
}

if ( 1 > 2) {
    console.log("Teste");
} else if (1 == 1) {
    console.log("Testando");
}