const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const local_areaSchema = new Schema (
  {
      identifier: {
      type: Schema.Types.ObjectId,
      ref: "Medical_area" 
      },  
    local_area: {
          type:String,
          unique: "El área que deseas agregar ya esta en uso",
          required: true
      },
      now: {
        type: Timestamp(new Date().getTime())
      }

  } ,
  { Timestamp: true}
);

module.exports = model('Local_area', local_areaSchema);
