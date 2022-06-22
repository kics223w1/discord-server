const express = require('express');
require('dotenv/config');
const userRouter = require('./router/user.js');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const params = {
    useNewUrlParser: true,
};

mongoose
    .connect(process.env.DB , params)
    .then( () => {
        console.log("Connected");
    }).catch((e) => {
        console.log(e.toString());
    });






app.get('/', (req, res) => {
    res.send('Welcome to the Google Cloud Platform');
})


app.use(bodyParser.json());

//Middleware
app.use('/user', userRouter);


//Listen sever
const port = process.env.PORT || 3000;
app.listen(port , ()=>{
    console.log(`sever is running on ${port}`);
});

app.use(cors());