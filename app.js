const express = require('express');
require('dotenv/config');
const userRouter = require('./router/user.js');
const apiRouter = require('./router/api.js');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const { response } = require('express');
const params = {
    useNewUrlParser: true,
};
app.use(cors());

mongoose
    .connect(process.env.DB , params)
    .then( () => {
        console.log("Connected");
    }).catch((e) => {
        console.log(e.toString());
    });






app.get('/', (req, res) => {
    res.send("Welcome to Discord Server");
})


app.use(bodyParser.json());

//Middleware
app.use('/user', userRouter);

app.use('/api', apiRouter);


//Listen sever
const port = process.env.PORT || 5000;
app.listen(port , ()=>{
    console.log(`sever is running on ${port}`);
});
