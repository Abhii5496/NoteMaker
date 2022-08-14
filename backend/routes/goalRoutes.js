const express = require('express')
const router = express.Router()
const { getGoals, setGoal, updateGoal, deletetGoal} = require('../controller/goalController')
const {protect} = require('../middleware/authMiddleware')


// router.get('/', getGoal)

// router.post('/',setGoal)

router.route("/").get(protect,getGoals).post(protect,setGoal)

// router.put('/:id',updateGoal)

// router.delete('/:id', deletetGoal)

router.route("/:id").put(protect, updateGoal).delete(protect, deletetGoal)

module.exports = router