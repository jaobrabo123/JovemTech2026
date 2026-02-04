const PI = Math.PI;

try {
    PI = 5
} catch (error) {
   console.log(`Erro ao tentar alterar uma constante (${PI}):`, error);
}