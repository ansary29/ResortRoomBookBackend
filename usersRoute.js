const express = require('express');
const router = express.Router();
const User = require('../models/user')

router.post("/register", async(req, res) => {
    console.log("request body", req.body)

    const newUser = new User({name : req.body.name, email : req.body.email , password : req.body.password})

    try {
        const user = await newUser.save()
        return res.send('User Registered Successfully')
    } catch (error) {
        console.log("error", error)
        return res.status(400).json({ error });
    }

});

router.post("/login", async(req, res) => {

    const {email,password} = req.body
    console.log("request",req.body);

    try {
        const user = await User.findOne({email: email , password : password})
        if(user) {

            const temp = {
                name : user.name,
                email : user.email,
                isAdmin : user.isAdmin,
                _id : user._id
            }

            res.send(temp)
        } else {
            return res.status(400).json({ message : 'Login failed'});
        }
    } catch (error) {
        return res.status(400).json({ error });
    }

})


router.get("/getallusers", async(req, res) => {

    try {
        const users = await User.find()
        res.send(users)
    } catch (error) {
        return res.status(400).json({ error })
    }

})

module.exports = router
