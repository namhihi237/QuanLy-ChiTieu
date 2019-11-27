const Spends = require("../models/spend.model");

module.exports = {
  index: async (req, res) => {
    const idGoogle = req.signedCookies.userId;
    const spends = await Spends.find({ idGoogle });
    let money = [];
    let danhmucs = [];
    let tongS = 0;
    for (let item = 0; item < spends.length; item++) {
      money.push(spends[item].money);
      danhmucs.push(spends[item].danhMuc);
      tongS += money[item];
    }
    // console.log(spends);
    // console.log(money);
    // console.log(danhmucs);
    res.render("chart/index", { money, danhmucs, tongS });
  }
};
