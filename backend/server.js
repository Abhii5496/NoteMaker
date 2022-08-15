const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleWare')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000
const bodyparser = require('body-parser')

connectDB()

const app = express()

app.use(bodyparser.json())
app.use(express.json())
app.use(express.urlencoded({extended:false}))



app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)


app.listen(port, () => {
    console.log(`Server running on ${port}`);
})