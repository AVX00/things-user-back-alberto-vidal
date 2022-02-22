const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  name: {
    unique: true,
    type: String,
    required: true,
  },
  password: { type: String, required: true },
});

const User = model("user", UserSchema, "users");

module.exports = User;
