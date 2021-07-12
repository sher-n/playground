module.exports = (sequelize, dataTypes) => {
    const model = sequelize.define('Product', {
        product_name : {
            type : dataTypes.STRING(255)
        },
        price : {
            type : dataTypes.STRING(255)
        },
        link : {
            type : dataTypes.STRING(255)
        },
        amount : {
            type : dataTypes.INTEGER()
        }
    },{
        tableName : 'products',
        timestamps : false
    });

    model.associate = models => {
        model.belongsTo(models.Category, { foreignKey : "category_id" });
        model.belongsToMany(models.Cart, { through : "product_cart"});
        model.belongsToMany(models.Buy, { through : "product_buy"})
    }

    return model;
}