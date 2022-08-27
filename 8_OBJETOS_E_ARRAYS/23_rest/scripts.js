let num = 2;
let num1 = 4;
let num2 = 5;
let num3 = 9;

function imprimirNumeros(...args) {
  for(let i = 0; i < args.length; i++ ) {
    console.log(args[i]);
  }
}

imprimirNumeros(num,num1,num2,num3);