const db = require("../models");

const getProfile = async (req,res) => {
    // const userList = await db.Profile.findAll();
    const userList = await db.Profile.findOne({
        where : {
            user_id : req.user.id
        }
    });
    res.status(200).send(userList);
}

const editProfile = async (req,res) => {

    const { name, bio, address,balance } = req.body;
    const targetProfile = await db.Profile.findOne({
        where : {
            user_id : req.user.id
        }
    });
    
    if (!targetProfile) {

      return  res.status(404).send({ message : `profile ${name} not found`});

    } else {
        
        if (req.params.action == "name") {
            await targetProfile.update({ 
                name : name
            });
            return res.status(201).send({message : "edited name"})   
        }

        if (req.params.action == "bio") {
            await targetProfile.update({ 
                bio : bio
            });
            return res.status(201).send({message : "edited bio"})
            
        }
        if (req.params.action == "address") {
            await targetProfile.update({ 
                address : address
            });
            return res.status(201).send({message : "edited address"})
            
        }

        await targetProfile.update({
            name,
            bio,
            address
        })

        return res.status(200).send({ message : `ok`});
        
    }
        
    }
    


module.exports = {
    getProfile,
    editProfile
}