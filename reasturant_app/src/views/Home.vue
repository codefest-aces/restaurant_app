<template>
  <v-app id="inspire">

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>


          <v-col
            cols="12"
            sm="12"
          >

              <!--  -->

              <v-card
    class="mx-auto mt-12"
    max-width="450"
  >
    <v-system-bar></v-system-bar>

    <v-toolbar
      flat
      color="transparent"
    >
      <v-btn icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>

      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search Restaurants"
        single-line
      ></v-text-field>
    </v-toolbar>



    <v-list three-line v-bind:class="{ active: isActive }">
      <v-list-item
        v-for="(item, i) in searching"
        :key="i"
        ripple
        @click="() => {}"
      >
        <v-img
          :src="item.image"
          class="mr-4"
          max-width="64"
          min-width="64"
        ></v-img>
        <v-list-item-content>
         <!--description page links-->
        <router-link :to="{name: 'Description', params: {camis: item.camis}}" class="routerlinks">  
          <span
            class="text-uppercase font-weight-regular text-caption"
            v-text="item.cuisine_description"
          ></span>
          <div v-text="item.dba"></div>
        </router-link>

        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>

          </v-col>

        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>


  export default {
    data: () => ({
      items: [

      ],
      search: '',
      isActive: false
    }),
    methods:{
      turnOff() {
        this.isActive = false
      }
    },
    computed: {
    searching () {

      if (!this.search || this.search.length < 3) {
        //console.log(this.isActive)
        // if(this.isActive) {
        //   turnOff()
        // }
          return []
      }



        const search = this.search.toLowerCase()

        return this.items.filter(item => {
          this.isActive = true
          let text = ""
          if(item.dba) {
             text = item.dba.toLowerCase()
          }




          return text.indexOf(search) > -1
        })

      },
    },
    async mounted () {

      this.items = this.$store.state.apiData
    }

  }
</script>
<style >
.active{
  height: 800px;
  overflow-y:auto;

}
.routerlinks {
  text-decoration: none;
}
</style>
