const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UsersSchema = new Schema({
  idGoogle: String,
  email: { type: String, lowercase: true },
  name: String
});
const Users = mongoose.model("Users", UsersSchema, "users");
module.exports = Users;
