const mongoose = require("mongoose");

const staffsSchema = new mongoose.Schema({
  id: { type: Number },
  name: { type: String },
  surname: { type: String },
  age: { type: Number },
  active: { type: Boolean },
});

const staffs = mongoose.model("staff", staffsSchema);

module.exports = staffs;
