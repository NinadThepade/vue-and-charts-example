<template>
  <div class="main-container">
    <div class="selection-container">
      <img class="vue-image" src="./assets/logo.png">
      <MetricSelector :initalMetric="selectedMetric" @selectedMetricUpdated="onMetricUpdate" />
      <ChartTypeSelector :initalType="chartType" @chartTypeUpdated="onChartTypeUpdate" />
    </div>
    
    <Charts :selectedMetric="selectedMetric" :chartType="chartType"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Charts from './components/Charts'
import MetricSelector from './components/MetricSelector'
import ChartTypeSelector from './components/ChartTypeSelector'

export default {
  name: "App",
  components: {
    Charts,
    MetricSelector,
    ChartTypeSelector
  },
  data () {
    return {
      chartType: 'LineChart',
      selectedMetric: ''
    }
  },
  created () {
    // Initial store request to get data
    this.getAllStats();
  },
  methods: {
    ...mapActions('charts', ['getAllStats']),
    onChartTypeUpdate (value) {
      this.chartType = value
    },
    onMetricUpdate(value) {
      this.selectedMetric = value
    }
  }
}
</script>

<style scoped>
 .main-container{
   padding: 20px;
 }
 .selection-container {
   display: flex;
 }
 .vue-image {
   height: 20px;
   width: 20px;
   margin-right: 10px;
   padding: 20px;
 }
</style>
