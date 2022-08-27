function imprimPar(num) {
  for(let i = num; i >= 0; i--) {
    if(i % 2 == 0) {
      console.log(i);
    }
  }
}


imprimPar(20);
imprimPar(40);