<template>
  <div class="metric-select-container">
    <div>{{labels.SELECT_METRIC}}</div>
    <div class="select-container">
      <select v-model="selectedMetric" >
      <option disabled value="">{{labels.SELECT_ONE}}</option>
      <option v-for="(option, index) in Object.keys(metrics)" :key="index" :value="option">
        {{ metrics[option] }}
      </option>
    </select>
    </div>
  </div>
</template>

<script>
import { METRICS, LABELS } from '../constants'
export default {
  name: "MetricSelector",
  props: ['initalMetric'],
  data() {
    return {
      metrics: METRICS,
      labels: LABELS,
      selectedMetric: this.initalMetric
    }
  },
  watch: {
    selectedMetric() {
      this.$emit('selectedMetricUpdated', this.selectedMetric)
    }
  }
}
</script>

<style scoped>
  .metric-select-container {
    display: flex;
    padding: 20px;
    border: 1px dashed black
  }
  .select-container {
    margin-left: 10px;
  }
</style>