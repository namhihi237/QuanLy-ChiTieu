const Spends = require("../models/spend.model");

module.exports = {
  index: async (req, res) => {
    const idGoogle = req.signedCookies.userId;
    // data pie-chart
    const spends = await Spends.find({ idGoogle });

    let money = [];
    let danhmucs = [];
    let tongS = 0;
    let dates = [];
    let months = [];
    for (let item = 0; item < spends.length; item++) {
      money.push(spends[item].money);
      danhmucs.push(spends[item].danhMuc);
      tongS += money[item];
      dates.push(
        `${spends[item].date.getDate().toString()}-${spends[item].date
          .getMonth()
          .toString()}-${spends[item].date.getFullYear().toString()}`
      );

      months.push(
        `${spends[item].date.getMonth().toString()}/${spends[item].date
          .getFullYear()
          .toString()}`
      );
    }

    danhmucs = JSON.stringify(danhmucs);
    dates = JSON.stringify(dates);
    months = JSON.stringify(months);
    res.render("chart/index", { money, danhmucs, tongS, dates, months });
  }
};
