const string = 'Teste';
const number = 10;

const concat = [string, number].reduce((acc, val)=>{
    return acc+val;
})

console.log(`Tipo da concatenação (${concat}):`, typeof concat)
