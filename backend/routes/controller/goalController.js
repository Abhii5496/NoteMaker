const asyncHandler = require('express-async-handler')


// @desc   Get goal
//@route   GET /api/goals
//@access  Private

const getGoals= asyncHandler((req, res) => {
    res.status(200).json({message:'Get Goals'})
})


// @desc   Set goal
//@route   POST /api/goals
//@access  Private

const setGoal= asyncHandler((req, res) => {
    if ( !req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message:'Set Goals'})
})

// @desc   Update goal
//@route   PUT /api/goals/:id
//@access  Private

const updateGoal= asyncHandler((req, res) => {
    res.status(200).json({message:`Update Goals ${req.params.id}`})
})
// @desc   Delete goal
//@route   DELETE /api/goals/:id
//@access  Private

const deletetGoal= asyncHandler((req, res) => {
    res.status(200).json({message:`Delete Goals ${req.params.id}`})
})

module.exports ={
    getGoals,setGoal,updateGoal,deletetGoal
}