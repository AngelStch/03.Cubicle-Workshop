const mongoose = require("mongoose")

const cubeScema = new mongoose.Schema({
    name: String,
    description: String,
    imageUrl: String,
    difficultyLevel: Number
})
const Cube  = mongoose.model("Cube", cubeScema)
module.exports = Cube