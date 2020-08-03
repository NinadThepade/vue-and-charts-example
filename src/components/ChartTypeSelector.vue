<template>
  <div class="chart-select-container">
    <div>{{labels.SELECT_CHART_TYPE}}</div>
    <div v-for="(option, index) in chartTypes" :key="index">
      <input type="radio" v-model="selectedType" :id="option.code" :name="option.code" :value="option.code">
      <label :for="option.code">{{option.label}}</label>
    </div>
  </div>
</template>

<script>
import { CHART_TYPES, LABELS } from '../constants'

export default {
  name: "ChartTypeSelector",
  props: ['initalType'],
  data() {
    return {
      chartTypes: CHART_TYPES,
      labels: LABELS,
      selectedType: this.initalType
    }
  },
  watch: {
    selectedType() {
      this.$emit('chartTypeUpdated', this.selectedType)
    }
  }
}
</script>

<style scoped>
  .chart-select-container {
    display: flex;
    margin-left: 10px;
    padding: 20px;
    border: 1px dashed black
  }
</style>