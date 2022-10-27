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

router.post('/css' ,async (req, res)=>{
    try {
        res.send(`html {
            height: 100%;
            background: #223;
            display: grid;
            place-items: center;
          }
          
          .box {
            --border-size: 3px;
            --border-angle: 0turn;
            width: 60vmin;
            height: 50vmin;
            background-image: conic-gradient(
                from var(--border-angle),
                #213,
                #112 50%,
                #213
              ),
              conic-gradient(from var(--border-angle), transparent 20%, #08f, #f03);
            background-size: calc(100% - (var(--border-size) * 2))
                calc(100% - (var(--border-size) * 2)),
              cover;
            background-position: center center;
            background-repeat: no-repeat;
          
            animation: bg-spin 3s linear infinite;
            @keyframes bg-spin {
              to {
                --border-angle: 1turn;
              }
            }
          
            &:hover {
              animation-play-state: paused;
            }
          }
          
          @property --border-angle {
            syntax: "<angle>";
            inherits: true;
            initial-value: 0turn;
          }
          `)
    }catch(e){
        res.json(e);
    }
});

router.post('/js' ,async (req, res)=>{
    try {
        res.send(`import appConfiguration from './app-configuration';
        import { APP_CONFIG_KEY, COMMAND_LINE } from './constants';
        
        const escapeSingleQuote = (input) => {
          return input.replace(/'/g, "'\\''");
        };`)
    }catch(e){
        res.json(e);
    }
});






module.exports = router;
