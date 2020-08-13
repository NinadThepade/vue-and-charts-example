import {deepCopyObject} from '../../utils/utils'
import { METRICS } from '../../constants'

export default class {
  constructor ( endpoint ) {
    this.state = {
      rawData: {},
      clickThruRateData: [],
      salesData: [],
      pageViewsData: [],
      ordersData: [],
      combinedStatsData: []
    };
    this.getters = {
      rawData: state => {
        return deepCopyObject(state.rawData)
      }
    };
    this.mutations = {
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
      }
    };
  }
}
