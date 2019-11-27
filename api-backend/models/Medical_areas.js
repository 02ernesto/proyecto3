const mongoose = require('mongoose');
const { Schema, model} = mongoose;

const medical_areaSchema = new Schema (
    {
        medicalArea: {
            type: String,
            required: true,
            unique : "Esta área Médica ya ha sido agregada"
        },
        responsible: {
            type: String, 
            required: false
        },
        subdirectory: {
            type:String
        },
        directori: {
            type: String, 
            required: true
        } 
    },
    { timestamps: true }
);

module.exports = model('Medical_areas', medical_areaSchema);