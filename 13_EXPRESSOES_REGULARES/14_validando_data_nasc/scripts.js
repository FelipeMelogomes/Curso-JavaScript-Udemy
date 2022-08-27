const validarDataNasc = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;


console.log(validarDataNasc.test('25/05/2003'));
console.log(validarDataNasc.test('5/2/2000'));
console.log(validarDataNasc.test('05-02/2000'))
console.log(validarDataNasc.test('05/02/00'));