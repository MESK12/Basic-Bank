const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const history = require("../models/records");

/**
 *  GET /
 * HOME
 */
router.get('', (req, res) => {
    const locals = {
        title: "MES Bank",
        description: "Simple Basic Banking Blog with Nodejs ,Express and MongoDb"
    }
    res.render('index', { locals });
});



router.get('/Coustomers', async (req, res) => {
    const locals = {
        title: "Coustomers",
        description: "Simple Basic Banking Blog with Nodejs ,Express and MongoDb"
    }

    try {
        const data = await Post.find();
        res.render('about', {locals, data});
    } catch (error) {
        console.log(error)
    }


    
});


/**
 *  GET /
 * coustomers :id
 */

router.get('/Coustomer/:id', async (req, res) => {
    try {
        const locals = {
            title: "Coustomers",
            description: "Simple Basic Banking Blog with Nodejs ,Express and MongoDb"
        }
        let slug = req.params.id;




        const data = await Post.findById({_id: slug});
        res.render('coustomer', {locals, data});
    } catch (error) {
        console.log(error)
    }


    
});


router.get('/coustomer/:id/addFunds', async (req, res) => {
    try {
        const locals = {
            title: "Add Funds",
            description: "Simple Basic Banking Blog with Nodejs ,Express and MongoDb"
        }
        let slug = req.params.id;

        const data = await Post.findById({_id: slug});
        res.render('addFundsModal', {locals, data});
    } catch (error) {
        console.log(error)
    }


    
});
router.get('/coustomer/:id/transferFunds', async (req, res) => {
    try {
        const locals = {
            title: "Transfer Funds",
            description: "Simple Basic Banking Blog with Nodejs ,Express and MongoDb"
        }
        let slug = req.params.id;
        const data = await Post.findById({_id: slug});
        res.render('transferModal', {locals, data});
    } catch (error) {
        console.log(error)
    }


    
});



router.get('/Contact', (req, res) => {
    const locals = {
        title: "Contact",
        description: "Simple Basic Banking Blog with Nodejs ,Express and MongoDb"
    }
    res.render('contact', {locals});
});


module.exports = router;