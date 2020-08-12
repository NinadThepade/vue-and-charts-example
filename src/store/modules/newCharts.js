import dataStore from '../../api/index'
import {deepCopyObject} from '../../utils/utils'
import { METRICS } from '../../constants'

// initial state
const state = () => ({
  rawData: {},
  clickThruRateData: [],
  salesData: [],
  pageViewsData: [],
  ordersData: [],
  combinedStatsData: []
})

// getters
const getters = {
  rawData: state => {
    return deepCopyObject(state.rawData)
  }
}

// mutations
const mutations = {
  SET_DATA (state, products) {
    state.rawData = products
  },
  SET_CLICKTHRURATE_DATA (state, clickThruRateData) {
    // formatting data for charts
    state.clickThruRateData = {
      columnData: [{type: 'string', name: 'Date'}, {type: 'number', name: METRICS['clickThruRate']}],
      rowData: [...clickThruRateData]
    }
  },
  SET_SALES_DATA (state, salesData) {
    state.salesData = {
      columnData: [{type: 'string', name: 'Date'}, {type: 'number', name: METRICS['sales']}],
      rowData: [...salesData]
    }
  },
  SET_PAGE_VIEWS_DATA (state, pageViewsData) {
    state.pageViewsData = {
      columnData: [{type: 'string', name: 'Date'}, {type: 'number', name: METRICS['pageViews']}],
      rowData: [...pageViewsData]
    }
  },
  SET_ORDERS_DATA (state, ordersData) {
    state.ordersData = {
      columnData: [{type: 'string', name: 'Date'}, {type: 'number', name: METRICS['orders']}],
      rowData: [ ...ordersData]
    }
  },
  SET_COMBINED_STATS_DATA (state, combinedStatsData) {
    state.combinedStatsData = {
      columnData: [
        {type: 'string', name: 'Date'}, 
        {type: 'number', name: 'ClickThruRate'}, 
        {type: 'number', name: 'Page Views'},
        {type: 'number', name: 'Sales'},
        {type: 'number', name: 'Orders'}],
      rowData: [...combinedStatsData]
    }
  },
}

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
