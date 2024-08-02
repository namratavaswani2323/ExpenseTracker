const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    userid:{
        type: String,
        reqired: [true, 'userid is needed']
    },
    amount: {
        type: Number,
        reqired: [true, 'amount is needed']
    },
    type: {
        type: String,
        reqired: [true, 'type is needed']
    },
    category: {
        type: String,
        reqired: [true, 'category is needed']
    },
    reference: {
        type: String,

    },
    description: {
        type: String,
        reqired: [true, 'description is needed']
    },
    date: {
        type: Date,
        requirde: [true, 'date is required']
    },

}, { timestamps: true });

const transactionModel = mongoose.model('transaction', transactionSchema);
module.exports= transactionModel;