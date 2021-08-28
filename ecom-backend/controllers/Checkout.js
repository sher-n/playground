const db = require("../models");

const Buy = async (req,res) => {
    const { product_name } = req.body;
    const targetUser = await db.User.findOne({
        where : {
            id : req.user.id
        }
    });
    if (!targetUser) {
        res.status(404).send({ message : "please sign in"})
        return
    }
    const targetProduct = await db.Product.findOne({
        where : {
            product_name : product_name
        }
    })
    if(!targetProduct) {
        res.status(404).send({ message : "product not found."})
        return;
    }
    const targetCartItem = await db.Cart.findOne({
        where : {
            product_name: targetProduct.product_name,
            user_id: targetUser.id

        }
    })

    await targetCartItem.destroy();

    // await db.

    res.status(200).send({message : `Thank you, we will deliver ${product_name} to you soon`})
    
    // res.status(200).send(userList);
}


module.exports = {
    Buy,
}