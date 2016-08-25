
function init() {
  var chart = new Highcharts.StockChart({
    chart: {
      renderTo: document.getElementById('graph')
    },
    title: {
      text: 'sample'
    },

    series: [{
      name: 'data1',
      data: createData()
    }]
  });
}

function createData() {
  return data.map(function (val) {
    return [Date.parse(val.Date), val.Sample1];
  });
}
window.onload = init;
