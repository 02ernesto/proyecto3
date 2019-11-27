const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const providerSchema = Schema (
    {
        name_provider: {
            type: String,
            required: true,
            unique: true
        },
        addres: {
            type: String,
        },
        first_service: {
            type: Date,
        },
        last_service: {
            type: Date
        }
    },
    { timestamps: true }
);

module.exports = model ('Provider', providerSchema);