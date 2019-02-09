let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a refernce to the contact model
let contactModel = require('../models/contact');

// Get Contact list page - READ
router.get('/',(req,res,next) => {
    contactModel.find((err, contactList) => {
        if(err){
            return console.error(err);
        }
        else{
           // console.log(contactList); 
               res.render('contacts/index',{
                title: 'Contacts List',
                contactList: contactList
                
            });
        }
    })
});

// GET ADD Contact Page 
router.get('/add',(req,res,next) => {
    res.render('contacts/add',{
            title: "Add a New Contact"
    });
});

// POST -process the ADD Page for contact page 
// router.post('/add',(res, req, next) => {

//     console.log("req" , req.body);
    // let newContact = contact({
    //     "firstName": req.body.fir

    //     firstName: String,
    //     lastName: String,
    //     age: Number
    // })
// })


router.post('/add',(req,res,next) => {
    console.log("req" , req.body);
    let newContact = contactModel({
        "firstName": req.body.FirstNameTextField,
        "lastName": req.body.LastNameTextField,
        "age": req.body.AgeTextField
    })

    contactModel.create(newContact, (err, contact) => {
        if(err){
            console.log(err);
            res.end(err);
        } else {
            // take the user back to the contact-list page
            res.redirect('/contact-list');
        }
    })
});

// GET the Edit Page 
router.get('/:id', (req, res, next) => {
    // let id = req.params.id;
    // console.log("Id", id);

    // contactModel.findById(id, (err,contactObject) => {
    //     if(err){
    //         console.log(err);
    //         res.end(err);
    //     }else{
    //         // show the edit view
    //         res.render('contact/edit', {
    //             title: "Edit Contact",
    //             contact: contactObject
    //         })
    //     }
    // })

})

// GET the and Process the delete page
router.get('/delete/:id',(req, res, next) => {
    console.log("Delete Id", req.params.id);
})



module.exports = router;
