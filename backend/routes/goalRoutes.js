const express = require('express')
const router = express.Router()
const { getGoals, setGoal, updateGoal, deletetGoal} = require('../controller/goalController')



// router.get('/', getGoal)

// router.post('/',setGoal)

router.route("/").get(getGoals).post(setGoal)

// router.put('/:id',updateGoal)

// router.delete('/:id', deletetGoal)

router.route("/:id").put(updateGoal).delete(deletetGoal)

module.exports = router