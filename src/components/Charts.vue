<template>
  <div id="google-chart"></div>
</template>

<script>
  import loadGoogleCharts from '../utils/google-charts-loader'
  import { mapState } from 'vuex'

  export default {
    name: "Charts",
    props: {
      'selectedMetric': {
        type: [String],
        required: true
      },
      'chartType': {
        type: [String],
        required: true
      }
    },
    methods: {
      paintChart () {
        // User must select a metric to view chart
        if(!this.selectedMetric) return

        let chartData = this.selectedMetric === 'all' ? this.combinedStatsData : this[this.selectedMetric + 'Data'];

        loadGoogleCharts(this.chartType, chartData)
      }
    },
    computed: {
      ...mapState('charts', ['clickThruRateData', 'salesData', 'pageViewsData', 'ordersData', 'combinedStatsData'])
    },
    watch: {
      selectedMetric() {
        this.paintChart()
      },
      chartType() {
        this.paintChart()
      }
    }
  }
</script>

<style>
  .chart-container {
    width: 1000px;
    height: 500px;
  }
</style>