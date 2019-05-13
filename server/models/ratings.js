var mongoose = require("mongoose");

var ratingSchema = mongoose.Schema({
    rating: Number,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String,
    },
    description: String
});

module.exports = mongoose.model("productRatings", ratingSchema);