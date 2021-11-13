//retornando apenas alguns campos
const meusUsuarios = [
    { id: 1, nome: 'Stefany', email: 'stefany@gmail.com', idade: 28, status: 'offline' },
    { id: 2, nome: 'Jenifer', email: 'jenifer@gmail.com', idade: 21, status: 'online' },
    { id: 3, nome: 'Bruna', email: 'bruna@gmail.com', idade: 50, status: 'offline' },
    { id: 4, nome: 'Caio', email: 'caio@gmail.com', idade: 79, status: 'online' },
    { id: 5, nome: 'Jose', email: 'jose@gmail.com', idade: 14, status: 'offline' },
    { id: 6, nome: 'Jana', email: 'jana@gmail.com', idade: 35, status: 'online' },
];

meusUsuariosOnline = meusUsuarios.filter(function(usuario) {
    return usuario.status === 'online';
});

meusUsuariosOffline = meusUsuarios.filter(function(usuario) {
    return usuario.status === 'offline';
})

console.log(meusUsuariosOnline);
console.log(meusUsuariosOffline);