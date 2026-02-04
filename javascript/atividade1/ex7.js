let salario = 3000;
console.log(`\nSalário antes do aumento: R$${salario.toFixed(2).replace('.',',')}\n`)

salario = salario * 1.1;

console.log(`Você teve um aumento de 10% no seu salário por ser o funcionário do mês!`);
console.log(`Salário atual: R$${salario.toFixed(2).replace('.',',')}\n`);