const mongoose = require('mongoose')

const Schema = mongoose.Schema;


const GeoLocation = new Schema({
    type: {
        type: String,
        default: "Point"
    },
    "coordinates": {
        type: [Number],
        index: "2dsphere"
    }
})

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    isAvailable: {
        type: Boolean,
        required: true
    },
    geometry: GeoLocation
})

module.exports = mongoose.model('User', userSchema)