const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const companyModel = require("./company");

// Bring in the bcrypt package
const bcrypt = require('bcrypt');
// SALT referes to the random data a hashing functions uses, you can leave this number like this.
const SALT_ROUNDS = 10;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {type:String, required: true},
  companyId: { type: Schema.Types.ObjectId, required: true}
});

// We use Mongoose "pre" functionality to do something before the user is saved.
userSchema.pre('save', function(next) {
  // Get the password from the user.
  const preHashPassword = this.password;

  // Using bcrypt hashSync method, we get hashed version of the user password.
  const hashedPassword = bcrypt.hashSync(preHashPassword, SALT_ROUNDS);
  
  // Replace the user's original password with our hashed version.
  this.password = hashedPassword;

  // Let mongoose know that it should continue saving the user.
  next();
});

userSchema.post('save', function(error, response, next) {
  const userId = this._id;
  const companyId = this.companyId;

  companyModel.findOneAndUpdate({
    _id: companyId
  }, {
    $push: { employees: userId } 
  }, (error, doc, res) => {
    if(error)
      console.error(error);

      next();
  });
});

// We define an instance method which will take a password from the outside world and comapre with the current user's.
userSchema.methods.login = function(password) {
  // Using bcrypt compareSync we can make sure that our hashed password matches the one provided by the client.
  const isPasswordValid = bcrypt.compareSync(password, this.password);
  // We return true for valid passwords, false otherwise.
  return isPasswordValid;
}

/* THE FOLLOWING LINES SHOULD ALWAYS BE AT THE END OF THE FILE */
const User = mongoose.model("User", userSchema);

module.exports = User;