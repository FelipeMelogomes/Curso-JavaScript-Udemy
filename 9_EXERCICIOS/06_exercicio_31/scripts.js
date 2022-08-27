let num = [1,2,3,4,5,6,];
let nuns = [1,2,3];

function verificaElementos(arr) {
  if(arr.length >= 5) {
    console.log("Muitos elementos!");
  } else {
    console.log("Poucos elementos!")
  }
}


verificaElementos(num);
verificaElementos(nuns);