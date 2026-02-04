let saldo = 0;

saldo += 200;
console.log('\nDepósito de R$200,00');

saldo -= 50;
console.log('Saque de R$50,00')

console.log(`\nSeu saldo final é de R$${saldo.toFixed(2).replace('.',',')}\n`)