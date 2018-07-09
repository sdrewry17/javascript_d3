var x = []
var y = []
var labels = [];
var $chart = document.getElementById('chart');

function loadData() {
    d3.csv("target.csv", function(error, response) {
    if (error) return console.warn(error);
    response.forEach(function(d) {
        x.push(+d.median_age_male);
        y.push(+d.Data_value);
        labels.push(d.Locationabbr);
            }
        );
    });
};

function drawChart() {
    var chartData = [{
    x: x,
    y: y,
    text: labels,
    mode: 'markers+text',
    type: "scatter",
    name: "% former smokers vs. median age of males",
    marker: {size: 20}
    }];
    var layout = {
    autosize: false,
    width: 600,
    height: 600,
    title: "% former smokers vs. median age of males",
    xaxis: {
        title: "Median age of males in State",
        range: [25, 45]
    },
    yaxis: {
        title: "% of former smokers in State",
        range: [15, 35]
    }
    };
    Plotly.newPlot($chart, chartData, layout);
    console.log('attempted to draw Chart')
    console.log(chartData, layout)
};

loadData();
drawChart();
