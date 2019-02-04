let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a refernce to the contact model
let contact = require('../models/favorite');

// Get Contact list page - READ
router.get('/',(req,res,next) => {
    contact.find((err, favoriteList) => {
        if(err){
            return console.error(err);
        }
        else{
            console.log(favoriteList); 
               res.render('favorite/index',{
                title: 'favorite List',
                favoriteList: favoriteList
                
            });
        }
    })
});



module.exports = router;
