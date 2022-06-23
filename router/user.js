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



router.get('/login' ,async (req, res)=>{
    try {
        const check = await User.findOne({account: req.params.account, password: req.params.password,});
        res.json(check);
    }catch(e){
        res.json(e);
    }
});

router.get('/checkaccount' ,async (req, res)=>{
    try {
        const check = await User.findOne({account: req.body.account});
        res.json(check);
    }catch(e){
        res.json(e);
    }
});


module.exports = router;
