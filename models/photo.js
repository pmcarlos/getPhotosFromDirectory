const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photoSchema = new Schema({
    photo: String,
    imei: String,
    date: Date
}, 
{
  timestamps: true
});

const Photo = mongoose.model('photo', photoSchema);
module.exports = Photo;