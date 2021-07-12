module.exports = (sequelize, dataTypes) => {
    const model = sequelize.define('Cart', {
        amount : {
            type : dataTypes.INTEGER()
        },
        status : {
            type : dataTypes.STRING(200)
        }
    },{
        tableName : 'carts',
        timestamps : false
    })

    model.associate = models => {
        model.belongsTo(models.User, { foreignKey : "user_id"})
        model.belongsToMany(models.Product, { through : "product_cart"})
    };

    return model;
}