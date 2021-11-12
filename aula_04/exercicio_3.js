const pedido = {
    'a entrada': 'hamburger',
    'o adicional': 'camiseta do vegetais',
    'o drink': 'coca- cola'
};

pedido.valorEntrada = 17.65;
pedido.valorDrink = 24.99;

console.log(pedido);

//acessando propriedade dentro do objeto, notação ponto
console.log("O que é a entrada? " + pedido["a entrada"]);
console.log("Valor da entrada? " + pedido.valorEntrada);

console.log("Qual é drink? " + pedido["o drink"]);
console.log("Valor do drink? " + pedido.valorDrink);