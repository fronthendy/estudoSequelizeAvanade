const { Usuario, Post, sequelize } = require('./models');
const { Op } = require('sequelize');

// Buscar comentário utilizando findAll, limit e offset
// Comentario.findAll({
//     order: [
//         ['id', 'ASC']
//     ],
//     limit: 2,
//     offset: 2
// })
// .then((resultado) => {
//     console.log(resultado.map(usuario => usuario.toJSON()));
// });

// // Buscar usuario usando findByPK, filtra por Primary Key
// Usuario.findByPk(4)
// .then((resultado) => {
//     console.log(resultado.dataValues);
// });


// //Buscar primeiro usuario com nome == 'Hendy'
// Usuario.findOne({
//     where: {
//         nome: 'Hendy'
//     }
// })
// .then((resultado) => {
//     console.log(resultado.dataValues);
// });

// // Buscar todos os usuarios que tenha a letra A no nome
// Usuario.findAll({
//     where: {
//         nome: {[Op.like]: '%a%'}
//     }
// })
// .then((resultado) => {
//     console.log(resultado.map(usuario => usuario.toJSON()));
// });

// // Buscar todos os usuarios que não tenha a letra A no nome
// Usuario.findAll({
//     where: {
//         nome: {[Op.notLike]: '%a%'}
//     }
// })
// .then((resultado) => {
//     console.log(resultado.map(usuario => usuario.toJSON()));
// });

// Usuario.create({
//     nome: 'Natalia',
//     email: 'nat@digitalhouse.com',
//     senha: 'maravilhosaaaa123'
// }).then((resultado) => {
//     console.log(resultado.toJSON());
// });

// Usuario.update({
//     senha: 'novasenha123'
// }, {
//     where: {
//         id: 8
//     }
// }).then((resultado) => {
//     console.log(resultado);
// })

// Usuario.destroy({
//     where: {
//         id: 6
//     }
// }).then((resultado) => {
//     console.log(resultado);
// })


// Usuario.findAll().then((usuarios) => {
//     console.log(usuarios.map((usuario) => usuario.toJSON()));
// })

// Usuario.findByPk(1, {
//     include: [
//         {association: "posts"}
//     ]
// })
// .then((usuario) => {
//   console.table(usuario.posts.map((post) => post.toJSON()))
// })

// outro jeito

Usuario.findByPk(1, {include:['posts']}).then(
    usuario => {
        console.log(usuario.toJSON());
        sequelize.close();
    }
)



