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

router.post('/contentType' ,async (req, res)=>{
    try {
        const contype = req.headers['content-type'];
        const check2 = "huyhuy123456789";
        res.writeHead(200, { 'Content-Type': `${contype}` })
        res.write(check2)
        res.end()
    }catch(e){
        res.json(e);
    }
});






module.exports = router;
