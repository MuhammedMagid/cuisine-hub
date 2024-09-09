const Dish = require('../models/dish.model');

//Read all 
const getDishes = async (req, res) => {
  try {
    const products = await Dish.find({})
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}


//Read a dish
const getDish = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Dish.findById(id)
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}


//Update a data (U)
const updateDish = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Dish.findByIdAndUpdate(id, req.body)

    if (!product) {
      return res.status(404).json({ message: "Dish not found" })
    }

    const updatedValue = await Dish.findById(id)
    res.status(200).json(updatedValue)

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

//Delete a dish 
const deleteDish = async (req, res) => {
  try {
    const { id } = req.params
    const product = await Dish.findByIdAndDelete(id, req.body)

    if (!product) {
      return res.status(404).json({ message: "Dish not found" })
    }
    res.status(200).json("Dish is deleted successflly")

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

//creat new dish 
const creatDish = async (req, res) => {
  try {
    const product = await Dish.create(req.body)
    res.status(200).json(product)

  } catch (error) {
    res.status(500).json({ message: error.message });
  };

}

module.exports = {
  getDishes,
  getDish,
  updateDish,
  deleteDish,
  creatDish
}