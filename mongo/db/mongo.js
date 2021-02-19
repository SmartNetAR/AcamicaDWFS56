const mongoose = require("mongoose");

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}
module.exports = mongoose.connect("mongodb://acamica:acamica@localhost:27017/acamica", options);