module.exports = (sequelize, DataTypes) => {

    // define(nomeModel, colunas, config)
    const Post = sequelize.define(
        "Post", {
            texto: DataTypes.STRING,
            img: DataTypes.STRING,
            n_likes: DataTypes.INTEGER
        }, {
            tableName: "posts",
            timestamps: false
        }
    );

    Post.associate = (models) => {
        // relação N:1 (vários posts de 1 usuario)
        Post.belongsTo(models.Usuario, { as: "usuario", foreignKey: "usuarios_id" });
    }

    return Post;

}