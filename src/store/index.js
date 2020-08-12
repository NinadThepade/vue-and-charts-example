import Vue from 'vue'
import Vuex from 'vuex'
import charts from './modules/charts'
import newCharts from './modules/newCharts'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { charts, newCharts }
})