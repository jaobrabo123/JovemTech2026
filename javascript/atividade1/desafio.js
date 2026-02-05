console.log('\nBEM VINDO À CALCULADORA DE TROCO!\n')

const valorCompra = 27.5;
const valorPago = 50;
const troco = valorPago - valorCompra;

const formatar = (val) => val.toFixed(2).replace('.',',');

console.log(`Valor da compra: R$${formatar(valorCompra)}`);
console.log(`Valor pago: R$${formatar(valorPago)}`);
console.log(`Troco: R$${formatar(troco)}\n`);
