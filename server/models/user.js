var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");
var storeSchema = require("../models/store")

var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    address: {
            street: { type: String, required: true },
            city: { type: String, required: true },
            state: { type: String, required: true },
            zipcode: { type: Number, required: true }
    },
    isSeller: Boolean,
    date_join:{
        type: Date,
        default: Date.now
    },
    profile_image:{
        type: String
    },
    storesOwned:[{type: String}]


});

UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model("Users", UserSchema);