function init() {
  var chart = new Highcharts.StockChart({
    chart: {
      renderTo: document.getElementById('graph')
    },
    title: {
      text: 'sample'
    },

    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: '%',
        rotation: 0
      }
    },

    tooltip: {
      useHTML: true,
      formatter: function (e) {
        var content = '';
        this.points.forEach(function (val) {
          var series = val.series;
          content += '<span style="color:' + val.color + '">' + series.name + '</span>:';
          content += val.point.name + '</br>';
        });
        return content;
      }
    },

    series: createData()
  });
}

function createData() {
  var sample1 = [];
  var sample2 = [];
  var sample3 = [];
  data.forEach(function (val) {
    var unixtime = Date.parse(val.Date);
    sample1.push({
      x: unixtime,
      y: (val.Sample1 / 50) * 100,
      name: val.Sample1
    });
    sample2.push({
      x: unixtime,
      y: (val.Sample2 / 300) * 100,
      name: val.Sample2
    });
    sample3.push({
      x: unixtime,
      y: (val.Sample3 / 300) * 150,
      name: val.Sample3
    });
  });

  return [
    {
      name: 'data1',
      data: sample1
    }, {
      name: 'data2',
      data: sample2
    }, {
      name: 'data3',
      data: sample3
    }
  ];
}

window.onload = init;
