const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
    },
    status: {
        type: String,
    },
    links: {
        type: Object,
    },
    contract: {
        type: String,
    },
    chain: {
        type: String,
    },
    token: {
        type: String,
    },
    fees_in: {
        type: Number,
    },
    fees_out: {
        type: Number,
    },
    daily: {
        type: Number,
    },
    security: {
        type: String,
    },
    info: {
        type: String,
    },
});

module.exports = User = mongoose.model('user', UserSchema);