const express = require("express");
const router = express.Router();
const {getDishes, getDish , updateDish, deleteDish, creatDish } = require ("../controllers/dish.controller")

router.get('/' , getDishes);
router.get('/:id' , getDish);
router.put('/:id' , updateDish);
router.delete('/:id' , deleteDish);
router.post('/' , creatDish);


module.exports = router