let mongoose = require('mongoose');

// create a model class
let contactSchema = mongoose.Schema({
    Title: String,
    Favourite: String,
   
},{
    collection: "favouritethings"
});

module.exports = mongoose.model('dipesh',contactSchema);