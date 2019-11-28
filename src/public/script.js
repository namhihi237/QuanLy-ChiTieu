const money = document.getElementById("money").innerText;
const moneyArr = money.split(",");
const moneyArrNum = moneyArr.map(item => {
  return parseFloat(item);
});
const danhmucs = document.getElementById("danhmucs").innerText;
const danhmucArr = danhmucs.split(",");
var obj = {};
for (let i = 0; i < danhmucArr.length; i++) {
  Object.assign(obj, { [danhmucArr[i]]: 0 });
}
const newDanhmucs = Object.keys(obj);
var newMoneys = [];
for (let i = 0; i < newDanhmucs.length; i++) {
  let money = 0;
  for (let j = 0; j < danhmucArr.length; j++) {
    if (danhmucArr[j] === newDanhmucs[i]) {
      money = money + moneyArrNum[j];
    }
  }
  newMoneys.push(money);
}

new Chart(document.getElementById("pie-chart"), {
  type: "pie",
  data: {
    labels: newDanhmucs,
    datasets: [
      {
        label: "đơn vị (VND)",
        backgroundColor: [
          "#3e95cd",
          "#8e5ea2",
          "#3cba9f",
          "#e8c3b9",
          "#c45850",
          "#D2691E",
          "#7FFF00",
          "#00FFFF",
          "#4682B4",
          "#FFFFFF",
          "#0000FF"
        ],
        data: newMoneys
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: "Biểu đồ tỷ lệ tiêu dùng"
    }
  }
});
$(document).ready(function() {
  $("p").hide();
});
