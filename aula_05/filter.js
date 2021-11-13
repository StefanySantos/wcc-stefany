// FILTER tirando apenas numeros pares da lista
const meusNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const meusNumerosPares = meusNumeros.filter(function(number) {
    return number % 2 === 0;
});

console.log(meusNumerosPares);