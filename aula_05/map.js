//retornando apenas alguns campos
const meusUsuarios = [
    { id: 1, nome: 'Stefany', email: 'stefany@gmail.com', idade: 28 },
    { id: 1, nome: 'Jenifer', email: 'jenifer@gmail.com', idade: 21 },
];

meusUsuarios.forEach(function(usuario) {
    console.log(usuario)
});

const meusUsuariosFormatados = meusUsuarios.map(function(usuario) {
    const usuarioFormatado = { nome: usuario.nome, email: usuario.email };
    return usuarioFormatado;
});

console.log(meusUsuariosFormatados);