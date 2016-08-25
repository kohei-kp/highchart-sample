
function init() {
  var chart = new Highcharts.StockChart({
    chart: {
      renderTo: document.getElementById('graph')
    },
    title: {
      text: 'sample'
    },

    yAxis: [
      {
        min: 0,
        max: 50,
        opposite: false
      },
      {
        min: 0,
        max: 300
      }
    ],

    series: createData()
  });
}

function createData() {
  var sample1 = [];
  var sample2 = [];
  data.forEach(function (val) {
    sample1.push([Date.parse(val.Date), val.Sample1]);
    sample2.push([Date.parse(val.Date), val.Sample2]);
  });

  return [{
    name: 'data1',
    data: sample1,
    yAxis: 0
  }, {
    name: 'data2',
    data: sample2,
    yAxis: 1
  }];
}
window.onload = init;
