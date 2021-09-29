const mongoose = require('mongoose');

    const PartytimeSchema = new mongoose.Schema({

        username:{
            type:String,
            required:[
                true,"Username required"
            ], minlength:[3,"Username must be more than 3 characters long"]
        }
    }, { timestamps: true });
    
    const Partygoer = mongoose.model("Partygoer", PartytimeSchema);

    module.exports = Partygoer;