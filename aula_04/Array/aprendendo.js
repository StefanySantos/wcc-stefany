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