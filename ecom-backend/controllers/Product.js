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

module.exports = {
    getProduct,
    addProduct,

}