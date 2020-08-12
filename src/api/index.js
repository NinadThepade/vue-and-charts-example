const data = require('./mock-data.json')
const newData = require('./new-mock-data.json')

export default {
  getChartData (cb) {
    setTimeout(() => {
      cb(data)
    }, 100)
  },
  getNewChartData (cb) {
    setTimeout(() => {
      cb(newData)
    }, 100)
  }
}