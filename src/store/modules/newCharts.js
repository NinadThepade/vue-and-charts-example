import dataStore from '../../api/index'

import BaseModule from './baseModule';
var baseModule = new BaseModule('/api/users');

// state
const state = {
  ...baseModule.state,
};

// getters
const getters = {
  ...baseModule.getters,
};

// mutations
const mutations = {
  ...baseModule.mutations,
};

// actions
const actions = {
  getNewAllStats ({ commit }) {
    dataStore.getNewChartData(metrics => {  
      let data = metrics.records
      let clickThruRateData = []
      let salesData = []
      let pageViewsData = []
      let ordersData = []
      let combinedData = []

      // creating arrays for all metrics data
      data.forEach(element => {
        clickThruRateData.push([element.date, element.clickThruRate || 0])
        salesData.push([element.date, element.sales || 0])
        pageViewsData.push([element.date, element.pageViews || 0])
        ordersData.push([element.date, element.orders || 0])
        combinedData.push([element.date || 0, element.clickThruRate || 0, element.sales || 0, element.pageViews || 0, element.orders || 0])
      })

      commit('SET_DATA', metrics)
      commit('SET_CLICKTHRURATE_DATA', clickThruRateData)
      commit('SET_SALES_DATA', salesData)
      commit('SET_PAGE_VIEWS_DATA', pageViewsData)
      commit('SET_ORDERS_DATA', ordersData)
      commit('SET_COMBINED_STATS_DATA', combinedData)
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
