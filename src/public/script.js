const money = document.getElementById("money").innerText;
const moneyArr = money.split(",");
const moneyArrNum = moneyArr.map(item => {
  return parseFloat(item);
});
const danhmucs = document.getElementById("danhmucs").innerText;
const danhmucArr = danhmucs.split(",");
console.log(moneyArrNum);

new Chart(document.getElementById("pie-chart"), {
  type: "pie",
  data: {
    labels: danhmucArr,
    datasets: [
      {
        label: "đơn vị (VND)",
        backgroundColor: [
          "#3e95cd",
          "#8e5ea2",
          "#3cba9f",
          "#e8c3b9",
          "#c45850"
        ],
        data: moneyArrNum
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
