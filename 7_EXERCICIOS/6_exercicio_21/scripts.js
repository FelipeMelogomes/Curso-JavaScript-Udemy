function verificaDado(dado) {
  if(typeof dado === 'string') {
    console.log("Este dado é uma string");
  }
  else if(typeof dado === 'boolean') {
    console.log("Este dado é um Boolean");
  }
  else if(typeof dado === 'number') {
    console.log("Este dado é um Number");
  } 
}


verificaDado("felipe");

verificaDado(22222);

verificaDado(true);

verificaDado(22222222);
verificaDado(22222);