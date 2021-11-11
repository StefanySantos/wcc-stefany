const meuPrimeiroObjeto = {};


//chave valor ou propriedade valor
const meuCarro = {
    modelo: "corolla",
    cor: "cinza",
    ano: 2020,
    ehNovo: true
};

console.log(meuCarro);

//acessando propriedade dentro do objeto, notação ponto
console.log("Meu carro é novo? " + meuCarro.ehNovo);

console.log(meuCarro["temSeguro"]);