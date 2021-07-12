module.exports = (sequelize, dataTypes) => {
    const model = sequelize.define('User', {
        username : {
            type : dataTypes.STRING(255)
        },
        password : {
            type : dataTypes.STRING(255)
        },
        email : {
            type : dataTypes.STRING(255)
        },
        nickname : {
            type : dataTypes.STRING(200)
        },
        balance : {
            type : dataTypes.FLOAT(2)
        }
    },{
        tableName : 'users',
        timestamps : false
    });

    model.associate = models => {
        model.hasOne(models.Cart, { foreignKey : "user_id"});
        model.hasOne(models.Buy, { foreignKey : "user_id"});

    };

    return model;
}