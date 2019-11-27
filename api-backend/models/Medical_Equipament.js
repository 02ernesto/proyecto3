const mongoose = require('mongoose');
const { Schema, model } =mongoose;

const medical_equipamentSchema = new Schema (
    {
        number_control: {
            type: String,
        },
        medical_eq: {
            type: String
        },
        brand: {//marca
            type: String,
            required: true,
        },
        model: {
            type: String,
            required: true
        },
        serial_number: {
            type: String ,
            required: true 
        },
        level: {
            type: Number,
            min: 1,
            required: true,
        },
        garanty: {
            type: Date,
            required: true,
            default:"2016/11/01",
        },
        stock_number: {
            type: String,
            default: "Sin número de Serie"
        },
        date_of_purchase: {
            type: Date
        },
        star_up: {
            type: Date,
        }    
    },
    { timestamps:true }
);

module.exports =  model('Medical_equipament', medical_equipamentSchema);