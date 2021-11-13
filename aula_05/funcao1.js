const formataBomDia = (nome) => {
    return 'bom dia', nome;
}

const formataBomDiaArrow = (nome) => {
    return 'bom dia', +nome;
}

const formataBomDiaSemReturn = (nome) => ('bom dia, ' + nome);

const mensagemBomDia = formataBomDiaSemReturn('stefany jenifer');

console.log(mensagemBomDia);