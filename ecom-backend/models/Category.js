module.exports = (sequelize, dataTypes) => {
    const model = sequelize.define('Category', {
        category_name : {
            type : dataTypes.STRING(255)
        },
        category_icon : {
            type : dataTypes.STRING(255)
        }
    },{
        tableName : 'categories',
        timestamps : false
    })

    model.associate = models => {
        model.hasMany(models.Product , { foreignKey : "category_id"})
    }

    return model;
}