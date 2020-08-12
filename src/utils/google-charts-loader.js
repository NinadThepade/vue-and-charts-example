let chartsLoaderPromise = null

export function getChartsLoader () {
  // Check if charts already present on the window object 
  if (window.google && window.google.charts) {
    return Promise.resolve(window.google.charts)
  }

  // If not present, load creating script tag
  if (!chartsLoaderPromise) {
    chartsLoaderPromise = new Promise(resolve => {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.onload = () => resolve(window.google.charts)
      script.src = 'https://www.gstatic.com/charts/loader.js'
      document.body.appendChild(script)
    })
  }
  return chartsLoaderPromise
}

/* 
 * chartType: Specifies type of chart to be drawn [e.g: LineChart, ColumnChart]
 * chartData: contains data about both rows and columns
 * chartContainerId: Id of the container where the chart is displayed
*/
export default function loadGoogleCharts (chartType, chartData, chartContainerId) {
  return getChartsLoader().then(loader => {
    loader.load('current', {'packages':['corechart']});
    loader.setOnLoadCallback(drawChart);

    function drawChart() {
      let data = new google.visualization.DataTable();
      let chart = new google.visualization[chartType](document.getElementById(chartContainerId));

      // Setting up the columns dynamically (especially for 'All' case)
      chartData.columnData.forEach(element => {
        data.addColumn(element.type, element.name);
      });
      
      data.addRows(chartData.rowData);

      let chartOptions = {
        legend: { position: 'top' },
        pointSize: 7,
        width: 900,
        height: 400,
        animation:{
          duration: 1000,
          easing: 'out'
        }
      }

      chart.draw(data, chartOptions);
    }
  })
}