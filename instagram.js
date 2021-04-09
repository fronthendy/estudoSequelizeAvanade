const { Usuario, sequelize } = require('./models');

Usuario.findAll()
.then((resultado) => {
    console.log(resultado.map(user => user.toJSON()));
});


Usuario.findByPk(4)
.then((resultado) => {
    console.log(resultado.dataValues);
});

Usuario.findOne({
    where: {
        nome: 'Hendy'
    }
})
.then((resultado) => {
    console.log(resultado.dataValues);
});


