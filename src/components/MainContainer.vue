<template>
  <div>
    <div class="selection-container">
      <img class="vue-image" src="../assets/logo.png">
      <MetricSelector :initalMetric="selectedMetric" @selectedMetricUpdated="onMetricUpdate" />
      <ChartTypeSelector :initalType="chartType" @chartTypeUpdated="onChartTypeUpdate" />
    </div>
    
    <Charts 
      :selectedMetric="selectedMetric" 
      :storeName="storeName" 
      :chartContainerId="chartContainerId" 
      :chartType="chartType"
    />
  </div>
</template>

<script>
import Charts from './Charts'
import MetricSelector from './MetricSelector'
import ChartTypeSelector from './ChartTypeSelector'

export default {
  name: "MainContainer",
  components: {
    Charts,
    MetricSelector,
    ChartTypeSelector
  },
  props: ['chartContainerId', 'storeName'],
  data () {
    return {
      chartType: 'LineChart',
      selectedMetric: ''
    }
  },
  methods: {
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