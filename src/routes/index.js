const express = require('express');
const Router = express.Router();

Router.get('/',(req,res) => {
    res.send('Hello World');
})

Router.get('/index',(req,res) => {
    res.send('Hello World 2');
})

module.exports = Router;