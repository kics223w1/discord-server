const express = require('express');
const router = express.Router();
const User = require('../model/User.js');


router.post('/' ,async (req, res)=>{
    try {
        const check2 = "action=upload&data=1234";
        res.setHeader('content-type', 'application/x-www-form-urlencoded');
        res.send(JSON.stringify(check2));
    }catch(e){
        res.json(e);
    }
});



router.get('/login' ,async (req, res)=>{
    try {
        const check2 = "action=upload&data=1234";
        res.writeHead(200, { 'Content-Type': 'application/x-www-form-urlencoded' })
        res.write(JSON.stringify(check2))
        res.end()
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
