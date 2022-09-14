const express = require('express');
const router = express.Router();


router.get('/' ,async (req, res)=>{
    try {
        res.send("Welcome to Api Test");
    }catch(e){
        res.json(e);
    }
});

router.post('/statusCode' ,async (req, res)=>{
    try {
        res.send(req.body.statusCode);
    }catch(e){
        res.json(e);
    }
});





module.exports = router;
