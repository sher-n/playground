const db = require("../models");


const getCart = async (req,res) => {
    const cartList = await db.Cart.findAll({ where : { id : req.user.id }});
    res.status(200).send(cartList);
}

const addCart = async (req,res) => {
    const { amount } = req.body;
    await db.Cart.create({ 
        amount : amount,
        user_id : req.user.id,
        product_id : null
    })

    
};

const editCart = (req,res) => {

}

const deleteCart = (req,res) => {

}

module.exports = {
    getCart,
    addCart,
    editCart,
    deleteCart
}