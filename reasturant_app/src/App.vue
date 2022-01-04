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

  <router-view></router-view>
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
      ]
    }),
  }
</script>
