const { model, Schema } = require("mongoose");

const ItemSchema = new Schema({
  item: {
    type: String,
    required: true,
    unique: true,
  },
  user: { type: Schema.Types.ObjectId, ref: "user" },
});

const Item = model("item", ItemSchema, "items");

module.exports = Item;
