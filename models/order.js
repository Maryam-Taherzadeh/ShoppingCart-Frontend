var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    cart: { type: Object, required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    paymentId: { type: String, required: true },
    date: {type: Date}
});

module.exports = mongoose.model('Order', schema);