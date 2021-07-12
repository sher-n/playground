const db = require("../models");


const getCart = async (req,res) => {
    const cartList = await db.Interact.findAll(); //{ where : { UserId : req.user.id}}
    res.status(200).send(cartList);
}

const addCart = async (req,res) => {
    const { amount , product_id } = req.body;
    await db.Interact.create({ 
        amount : amount,
        status : 'cart',
        UserId : 1,
        ProductId : product_id

    })
    res.status(201).send({ message : "item added"});

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