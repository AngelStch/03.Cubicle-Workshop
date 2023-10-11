const mongoose = require("mongoose")

const cubeScema = new mongoose.Schema({
    name: String,
    description: String,
    imageUrl: String,
    difficultyLevel: Number,

    accessories:[{
        type: mongoose.Types.ObjectId,
        ref:"Accessory"
    }]
})
const Cube  = mongoose.model("Cube", cubeScema)
module.exports = Cube