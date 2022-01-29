<template>
  <v-app id="app">
    <!-- inspire -->
    <v-main >
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
              <v-system-bar>
              </v-system-bar>
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
          <div v-text="item.dba"></div>
          <span
            class="text-uppercase font-weight-regular text-caption"
            v-text="item.cuisine_description"
          ></span>
          
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
#app {
  background: url('https://wallpaperaccess.com/full/271708.jpg');
    /* no-repeat center center fixed !important; */
  background-size: 100% ;
  background-repeat: no-repeat; 
  /* height:100% ;
  width: 100%; */
  /* background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,94,247,1) 17.8%, rgba(2,245,255,1) 100.2% ); */
}
</style>
