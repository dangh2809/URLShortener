const nanoid = require('nanoid');
const mongoose = require('mongoose');
const shortId = nanoid.nanoid(8);
const URLSchema = new mongoose.Schema({
    longURL: {
        type: String, 
        required: true
    },
    shortURL: {
        type: String, 
        unique: true,
        default: shortId
    },
    clicks: {
        type: Number,
        default: 0
    }
})
module.exports = URL = mongoose.model('URLs', URLSchema);