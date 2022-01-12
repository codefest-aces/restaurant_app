<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
    >


      <v-tabs
        centered
        class="ml-n9"
        color="grey darken-1"
      >
        <v-tab
          to="/"
          >
          Home
        </v-tab>
        <v-tab
          to="/filter"
          >
          Filter Search
        </v-tab>
        <v-tab
          to="/about"
          >
          About
        </v-tab>
      </v-tabs>


    </v-app-bar>


  <div v-if="gotData">
    <router-view ></router-view>
  </div>
  <div v-else>
    <v-main>
        <h1>Loading...</h1>
    </v-main>

  </div>


  </v-app>
</template>

<script>
  export default {
    data: () => ({
      links: [
        'Home',
        'Filter Search',
        'About',

      ],
      paths: [
        '/',
        'filter',
        'about'
      ],
      gotData: false
    }),
    async mounted () {
      const axios = require('axios').default;

      let response = await axios.get("https://data.cityofnewyork.us/resource/43nn-pn8j.json?$where=inspection_date > '2020-01-01T00:00:00.000'&$limit=100000");

      let data = response.data
      let distinct = []
      let results = []
      for(let i = 0; i < data.length; i++) {
        if(!distinct.includes(data[i].camis)) {

          distinct.push(data[i].camis)
          results.push(data[i])

        }
      }
      //console.log(results)


      this.$store.state.apiData = results
      this.gotData = true
      console.log(this.$store.state.apiData)
    }
  }
</script>
