const express = require('express');
const router = express.Router();


router.get('/' ,async (req, res)=>{
    try {
        res.send("Welcome to Method Test");
    }catch(e){
        res.json(e);
    }
});

router.get('/get' ,async (req, res)=>{
    res.send("Method Get");
 });

router.delete('/delete' ,async (req, res)=>{
res.send("Method Delete");
});

router.head('/head' ,async (req, res)=>{
    res.header('Method Head', 'success');
    res.send(200);
});

router.options('/options' ,async (req, res)=>{
    res.header('Method Options', 'success');
    res.send(200);
});

router.post('/post' ,async (req, res)=>{
res.send("Method Post");
});

router.put('/put' ,async (req, res)=>{
res.send("Method Put");
});

router.patch('/patch' ,async (req, res)=>{
   res.send("Method Patch");
});






module.exports = router;
