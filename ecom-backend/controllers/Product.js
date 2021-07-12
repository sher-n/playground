const db = require("../models");



const getProduct = async (req,res) => {
    const productList = await db.Product.findAll({});
    res.status(200).send(productList);
}

const addProduct = async (req,res) => {
    const { product_name , price, link, amount} = req.body;
   
        await db.Product.create({
            product_name : product_name,
            price : price,
            link : link,
            amount : amount
        });

        res.status(201).send({ message : "Product added"});
    
};

const editProduct = async (req,res) => {
    const { product_name, price, link, amount } = req.body;
    const targetProduct = await db.Product.findOne({ where : { id : req.params.id }})
    await targetProduct.update({
        product_name : product_name,
        price : price,
        link : link,
        amount : amount
    })
    
}

const deleteProduct = async (req,res) => {
    const targetProduct = await db.Product.findOne({ where : { id : req.params.id }});
    if (targetProduct) {
        await targetProduct.destroy()
        res.status(204).send({message : `Product id ${req.params.id} has been deleted.`})
    } else {
        res.status(404).send({ message : "Product not found"})
    }
}

module.exports = {
    getProduct,
    addProduct,
    editProduct,
    deleteProduct
}