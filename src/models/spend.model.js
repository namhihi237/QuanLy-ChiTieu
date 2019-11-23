const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const spensSchema = new Schema({
  idGoogle: String,
  date: Date,
  money: Number,
  danhMuc: String,
  theLoai: String,
  ghiChu: String
});
const Spends = mongoose.model("Spends", spensSchema, "spends");
module.exports = Spends;
