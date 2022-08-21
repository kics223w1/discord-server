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
        const check = await User.findOne({account: req.query.account, password: req.query.password});
        const check2 = "action=upload&data=123";
        res.setHeader('content-type', 'application/x-www-form-urlencoded');
        res.json(check2);
    }catch(e){
        res.json(e);
    }
});

router.get('/checkaccount' ,async (req, res)=>{
    try {
        const check = await User.findOne({account: req.query.account});
        res.json(check);
    }catch(e){
        res.json(e);
    }
});


module.exports = router;
