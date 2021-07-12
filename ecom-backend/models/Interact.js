module.exports = (sequelize, dataTypes) => {
    const model = sequelize.define('Interact', {
        amount : {
            type : dataTypes.INTEGER()
        },
        status : {
            type : dataTypes.STRING(200)
        }
    },{
        tableName : 'interacts',
        timestamps : false
    })


    return model;
}