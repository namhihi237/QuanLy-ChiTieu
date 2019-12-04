const Users = require("../models/users.model");
const Spends = require("../models/spend.model");

const categories = [
  "Ăn uống",
  "Tán gái/trai",
  "Xe cộ",
  "Thẻ ĐT",
  "Làm đẹp",
  "Cà Phê, Trà Sữa",
  "Lương",
  "Phụ Cấp",
  "Tiết Kiệm",
  "Internet",
  "Tiền điện",
  "Tiền nước",
  "Đám,Tiệc",
  "Tiền học",
  "Mua sắm"
];
const types = ["Chi", "Thu", "Cho Vay", "Nợ"];

module.exports = {
  home: async (req, res) => {
    const idGoogle = req.signedCookies.userId;
    let spend = await Spends.find({ idGoogle });
    const spends = await spend.reverse();
    res.render("home/index", { spends });
  },
  create: (req, res) => {
    res.render("home/create");
  },

  postCreate: async (req, res) => {
    const idGoogle = req.signedCookies.userId;
    try {
      const item = Object.assign({ date: Date.now(), idGoogle }, req.body);
      const newSpend = await Spends.create(item);
    } catch (error) {
      console.log(error);
    }
    let spend = await Spends.find({ idGoogle });
    const spends = await spend.reverse();
    res.render("home/index", { spends });
  },

  edit: async (req, res) => {
    const _id = req.params._id;
    const spend = await Spends.findById(_id);
    res.render("home/edit", {
      spend,
      categories,
      types
    });
  },

  editPost: async (req, res) => {
    const _id = req.params._id;
    const newSpend = await Spends.findByIdAndUpdate({ _id }, req.body);
    const idGoogle = newSpend.idGoogle;
    let spend = await Spends.find({ idGoogle });
    const spends = await spend.reverse();
    res.render("home/index", { spends });
  },

  delete: async (req, res) => {
    const _id = req.params._id;
    await Spends.findByIdAndDelete({ _id });
    res.redirect("/home");
  },

  user: async (req, res) => {
    const idGoogle = req.signedCookies.userId;
    console.log(idGoogle);
    const user = await Users.findOne({ idGoogle });
    // console.log(user.length);
    res.render("home/user", { user });
  }
};
