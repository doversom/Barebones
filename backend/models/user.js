const mongoose = require("mongoose");
const url = process.env.MONGO_URL;

mongoose.set("strictQuery", false);

mongoose.connect(url);

const userSchema = new mongoose.Schema({
  username: String,
  name: String,
  passwordHash: String,
  role: Number,
});

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
