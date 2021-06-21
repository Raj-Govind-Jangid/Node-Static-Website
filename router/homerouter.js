var express = require('express')
var router = express.Router()

router.get('/',(req,res)=>{
    res.render('index',{layout:'base',title:'Node JS'});
});

router.get('/service',(req,res)=>{
    res.render('service',{layout:'base',title:'Service'});
});

router.get('/contact',(req,res)=>{
    res.render('contact',{layout:'base',title:'Contact'});
});

router.get('/about',(req,res)=>{
    res.render('about',{layout:'base',title:'About'});
});

module.exports = router;