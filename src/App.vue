<template>
  <div class="main-container">
    <MainContainer :chartContainerId="containerId" :storeName="storeName"/>
    <MainContainer :chartContainerId="newContainerId" :storeName="newStoreName"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import MainContainer from './components/MainContainer'

export default {
  name: "App",
  components: {
    MainContainer
  },
  data () {
    return {
      containerId: 'google-chart',
      newContainerId: 'new-google-chart',
      storeName: 'charts',
      newStoreName: 'newCharts'
    }
  },
  created () {
    // Initial store request to get data
    this.getAllStats();
    this.getNewAllStats();
  },
  methods: {
    ...mapActions('charts', ['getAllStats']),
    ...mapActions('newCharts', ['getNewAllStats'])
  }
}
</script>

<style scoped>
 .main-container{
   padding: 20px;
 }
</style>
