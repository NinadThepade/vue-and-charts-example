const data = require('./mock-data.json')

export default {
  getChartData (cb) {
    setTimeout(() => {
      cb(data)
    }, 100)
  }
}