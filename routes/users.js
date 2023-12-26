const express = require('express')
const router = express.Router()

// router.get('/haider', (req, res) =>{
//     res.render('haider')
// })


router.get('/cities', (req, res) =>{
    res.render('cities')
})


router.get('/contact', (req, res) =>{
    res.render('contact')           
})

router.get('/personalities', (req, res) =>{
    res.render('personalities')
})


router.get('/tspots', (req, res) =>{
    res.render('tspots')
})