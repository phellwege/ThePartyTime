const Partygoer = require('../models/models');

module.exports = {
    Indexs: (req,res) =>{
        Partygoer.find()
            .then(data => res.json({results:data}))
            .catch(err => res.status(400).json(err))
    },
    Show: (req,res) => {
        Partygoer.findOne({_id:req.params.id})
            .then(data => res.json({results:data}))
            .catch(err => res.status(400).json(err))
    },
    Create: (req,res) =>{
        Partygoer.create(req.body)
            .then(data => res.json({results:data}))
            .catch(err => res.status(400).json(err))
    },
    Update: (req,res) =>{
        Partygoer.findOneAndUpdate({_id: req.params.id},req.body,{new:true,runValidators:true})
        .then(data => res.json({results:data}))
        .catch(err => res.status(400).json(err))
    },
}