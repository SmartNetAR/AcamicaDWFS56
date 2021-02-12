const mongoose = require('mongoose');


const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}
mongoose.connect("mongodb://acamica:acamica@localhost:27017/acamica", options);

// mongoose.connect('mongodb://localhost:27017/peliculas', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });
module.exports = mongoose;
