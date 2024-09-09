
const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
    dishName: {
        type: String,
        required: true
    },
    cuisine: {
        type: String,
        required: true
    },
    ingredients: [String],
    instructions: [String],
    servingSize: String,
    nutritionalInfo: {
        calories: Number,
        protein: Number,
        fat: Number,
        carbohydrates: Number
    },
    tags: [String],
    image: String,
    cookTime: String,
    difficultyLevel: String
});

module.exports = mongoose.model('Dish', dishSchema);