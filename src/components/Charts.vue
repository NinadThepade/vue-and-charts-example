<template>
  <div :id="chartContainerId"></div>
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
      },
      'chartContainerId': {
        type: [String],
        required: true
      },
      'storeName': {
        type: [String],
        required: true
      }
    },
    methods: {
      paintChart () {
        // User must select a metric to view chart
        if(!this.selectedMetric) return

        let chartData = this.selectedMetric === 'all' ? this.state.combinedStatsData : this.state[this.selectedMetric + 'Data'];

        loadGoogleCharts(this.chartType, chartData, this.chartContainerId)
      }
    },
    computed: mapState({
      // getting current store data for dynamically sent storeName (Namespace)
      state (state) {
        return state[this.storeName]
      }
    }),
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