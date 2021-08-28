const db = require("../models");



const getCarProduct = async (req,res) => {
    const allProduct = await db.Product.findAll({
        where: {
            category: "car"
        }
    })
    res.status(200).send(allProduct);
}

const getProduct = async (req,res) => {
    const targetStore = await db.Store.findOne({ 
        where : {
            user_id : req.user.id
        }
    })
    const productList = await db.Product.findAll({ 
        where : {
            store_id : targetStore.id
        }
     });
    res.status(200).send(productList);
}

const addProduct = async (req,res) => {
    const { product_name , price, link, amount, description,category} = req.body;
    const targetStore = await db.Store.findOne({
        where : {
            user_id : req.user.id
        }
    })
        await db.Product.create({
            product_name,
            price,
            link,
            description,
            category,
            store_id: targetStore.id
        });

        res.status(201).send({ message : `Product ${product_name} added `});
    
};

const editProduct = async (req,res) => {
    const { product_name, price, link, amount, description, category } = req.body;
    const targetStore = await db.Store.findOne({
        where : {
            user_id : req.user.id
        }
    })
    if (!targetStore) {
        return res.status(404).send({message : "product not found"})
    }
    const targetProduct = await db.Product.findOne({
        where : {
            product_name: product_name,
            store_id : targetStore.id
        }
    })

    await targetProduct.update({
        product_name,
        price,
        link,
        amount,
        description,
        category
    })
    res.status(201).send({ message : `edited product id ${product_name}` })
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
    getCarProduct,
    getProduct,
    addProduct,
    editProduct,
    deleteProduct
}