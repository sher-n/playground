module.exports = (sequelize, dataTypes) => {
    const model = sequelize.define('Buy', {
        amount : {
            type : dataTypes.INTEGER()
        },
        status : {
            type : dataTypes.STRING(200)
        }
    },{
        tableName : 'buys',
        timestamps : false
    });

    model.associate = models => {
        model.belongsTo(models.User, { foreignKey : "user_id"});
        model.belongsToMany(models.Product, { through : "product_buy"});
    };

    return model;
}