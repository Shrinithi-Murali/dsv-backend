const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        phone: String,
        email: String,
    },
    { strict: false }
);

module.exports = mongoose.model("User", userSchema);
