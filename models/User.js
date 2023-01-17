const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const SALT_ROUNDS = 6

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique:true },
  password: { type: String, required: true }
 
})

UserSchema.set("toJSON", {
  transform: function(doc, ret) {
    delete ret.password
    return ret
  }
})

UserSchema.pre("save", function(next) {
  const user = this
  if (!user.isModified("password")) return next()
  bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
    if (err) return next(err)
    user.password = hash
    next()
  })
})

UserSchema.methods.comparePassword = function(tryPassword, cb) {
  bcrypt.compare(tryPassword, this.password, cb)
}


const User = mongoose.model("User", UserSchema)

module.exports = User

