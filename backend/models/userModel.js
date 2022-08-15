const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Add name"]
    },
    email:{
        type:String,
        required:[true,"Please Add email"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Please Add password"]
    },
},

{
    timestamps:true
}
)

module.exports =mongoose.model('User', userSchema)


// const mongoose = require('mongoose')

// const userSchema = mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: [true, 'Please add a name'],
//     },
//     email: {
//       type: String,
//       required: [true, 'Please add an email'],
//       unique: true,
//     },
//     password: {
//       type: String,
//       required: [true, 'Please add a password'],
//     },
//   },
//   {
//     timestamps: true,
//   }
// )

// module.exports = mongoose.model('User', userSchema)