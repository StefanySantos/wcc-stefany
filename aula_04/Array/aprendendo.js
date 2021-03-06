//array vazio
const arrayTeste = [];

const meuArray = ['Stefany', 'Jenifer', 'São Paulo'];

const meuArrayNumeros = [94, 6, 23];

const meuArrayBooleano = [true, false];

const meuArrayObjetos = [{
        nome: 'Stefany',
        idade: 28
    },
    {
        profissao: 'analista de sistemas',
        empresa: 'Zenklub'
    },
    {}, //objeto vazio dentro do array
    {},

]

const meuArrayVariosTipos = ["abacaxi", 700, true, { eletronico: 'laptop' }];
console.log(meuArrayVariosTipos);
//lendo o array
console.log('minha fruta é: ' + meuArrayVariosTipos[0]);

//tamanho do array
console.log(meuArrayVariosTipos.length);

//pegando a ultima posição
console.log(meuArrayVariosTipos[3]);

//pegando a ultima posição com length
const tamanhoMeuArrayVariosTipos = meuArrayVariosTipos.length
console.log(meuArrayVariosTipos[tamanhoMeuArrayVariosTipos - 1])
    //console.log(meuArrayVariosTipos.length-1);


//adicionando valores ao array no final
meuArrayVariosTipos.push('Hello');
console.log(meuArrayVariosTipos);

//adicionando na primeira posicao
meuArrayVariosTipos.unshift('Quinta- Feira');
console.log(meuArrayVariosTipos);

//adicionando em uma posicao especifica - ela sobrescreve a posiçao
meuArrayVariosTipos[3] = 'fone de ouvido';
console.log(meuArrayVariosTipos);

//excluindo a ultima posicao
meuArrayVariosTipos.pop();
console.log(meuArrayVariosTipos);

//apagando a primeira posicao
meuArrayVariosTipos.shift();
console.log(meuArrayVariosTipos);

//encontrando a posicao de um item especifico 
console.log(meuArrayVariosTipos.indexOf(700));


//remover uma posicao especifica, parametro ONDE EU COMEÇO, OS ITENS SEGUINTES
meuArrayVariosTipos.splice(3, 1);
console.log(meuArrayVariosTipos);


//adiciona um itens sem sobrescrever
meuArrayVariosTipos.splice(4, 0, 'carteira');
console.log(meuArrayVariosTipos);

meuArrayVariosTipos.splice(2, 0, { iphone: 5898.65 });
console.log(meuArrayVariosTipos);