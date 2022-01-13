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


  <template v-if="gotData">
    <router-view ></router-view>
  </template>
  <template v-else>
    <v-main  class="grey lighten-3">
      <v-container fill-height >
        <v-row justify="center"
                align="center"
        >
          <v-col cols="1">

            <div class="circles-to-rhombuses-spinner">
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </v-col>
        </v-row>

        </v-container>
    </v-main>


  </template>


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
<style>
.circles-to-rhombuses-spinner, .circles-to-rhombuses-spinner * {
      box-sizing: border-box;
    }

    .circles-to-rhombuses-spinner {
      height: 15px;
      width: calc( (30px + 30px * 1.125) * 3);
      display: flex;
      align-items: center;
      justify-content: center
    }

    .circles-to-rhombuses-spinner .circle {
      height: 30px;
      width: 30px;
      margin-left: calc(30px * 1.125);
      transform: rotate(45deg);
      border-radius: 10%;
      border: 3px solid #ff0326;
      overflow: hidden;
      background: transparent;

      animation: circles-to-rhombuses-animation 1200ms linear infinite;
    }

    .circles-to-rhombuses-spinner .circle:nth-child(1) {
      animation-delay: calc(150ms * 1);
      margin-left: 0
    }

    .circles-to-rhombuses-spinner .circle:nth-child(2) {
      animation-delay: calc(150ms * 2);
    }

    .circles-to-rhombuses-spinner .circle:nth-child(3) {
      animation-delay: calc(150ms * 3);
    }

    @keyframes circles-to-rhombuses-animation {
      0% {
        border-radius: 10%;
      }

      17.5% {
        border-radius: 10%;
      }

      50% {
        border-radius: 100%;
      }


      93.5% {
        border-radius: 10%;
      }

      100% {
        border-radius: 10%;
      }
    }

    @keyframes circles-to-rhombuses-background-animation {
      50% {
        opacity: 0.4;
      }
    }
</style>
