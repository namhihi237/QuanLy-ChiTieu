const Users = require("../models/users.model");
const Spends = require("../models/spend.model");

module.exports = {
  home: async (req, res) => {
    const idGoogle = req.signedCookies.userId;
    const spends = await Spends.find({ idGoogle });
    res.render("home/index", { spends });
  },
  create: (req, res) => {
    res.render("home/create");
  },
  postCreate: async (req, res) => {
    const idGoogle = req.signedCookies.userId;
    const item = Object.assign({ date: Date.now(), idGoogle }, req.body);
    const newSpend = await Spends.create(item);
    const spends = await Spends.find({ idGoogle });
    res.render("home/index", { spends });
  },
  edit: async (req, res) => {
    const _id = req.params._id;
    const spend = await Spends.findById(_id);
    res.render("home/edit", {
      spend
    });
  },
  editPost: async (req, res) => {
    const _id = req.params._id;
    const newSpend = await Spends.findByIdAndUpdate({ _id }, req.body);
    const idGoogle = newSpend.idGoogle;
    const spends = await Spends.find({ idGoogle });
    res.render("home/index", { spends });
  },
  delete: async (req, res) => {
    const _id = req.params._id;
    await Spends.findByIdAndDelete({ _id });
    res.redirect("/home");
  }
};
