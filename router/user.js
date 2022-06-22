const express = require('express');
const router = express.Router();
const User = require('../model/User.js');


router.post('/' ,async (req, res)=>{
    const user = new User({
        account: req.body.account,
        password: req.body.password,
        username: req.body.username,
    });
    try {
        const saveUser = await user.save();
        res.json(saveUser);
    }catch(e){
        res.json(e);
    }
});

module.exports = router;
