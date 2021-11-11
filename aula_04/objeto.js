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

console.log(meuCarro["rodas"]);

const modeloCarro = 'modelo';
console.log(meuCarro[modeloCarro]) //meuCarro.modelo ou meuCarro["modelo"]


//adicionando propriedade novas
meuCarro.temSeguro = true;
console.log(meuCarro);


//trocando o valor da propriedade
meuCarro.ano = 2021;
console.log(meuCarro);


//deletando proprietade
delete meuCarro.cor;
console.log(meuCarro);