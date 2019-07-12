const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const wishSchema = Schema({
    wish:String
});

// module.exports = mongoose.model("wishes",wishSchema)
mongoose.model("wishes",wishSchema)