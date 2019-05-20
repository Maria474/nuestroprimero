const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  nombre: String,
  apellido1: String,
  apellido2: String
});

var User = mongoose.model("User", UserSchema);
module.exports = User;
