// require modules for  user Model
let mongoose = require("mongoose");
let passportLocalMongoose = require("passport-local-mongoose");

// create a model class
let userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      default: "",
      trim: true,
      required: "user name is required"
    },
    // password will be encrypted by passport-local-mongoose
    //    password: {
    //        type: String,
    //        default: '',
    //        trim: true,
    //        required: 'password is required'
    //    }
    email: {
      type: String,
      default: "",
      trim: true,
      required: "email is required"
    },
    displayName: {
      type: String,
      default: "",
      trim: true,
      required: "email is required"
    },
    created: {
      type: Date,
      default: Date.now
    },
    update: {
      type: Date,
      default: Date.now
    }
  },

  {
    collection: "users"
  }
);
// config options for the userSchema
let options =({
    missingPasswordError: "Wrong / Missing Password"
});

userSchema.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model("User", userSchema);
