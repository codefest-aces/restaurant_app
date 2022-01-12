<template>
  <v-app id="inspire">

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>


          <v-col
            cols="8"
            
          >


              
                <v-form
                    ref="form"
                    v-model="search"
        append-icon="mdi-magnify"
        label="Search Restaurants"
                    lazy-validation

                >
                    <v-text-field
                    v-model="search"
                    label="Restaurant Name"
                    
                    ></v-text-field>


                    <v-text-field
                    v-model="camis_id"
                    
                    label="CAMIS ID"
                  
                    ></v-text-field>

                    <v-text-field
                    v-model="address"
                    
                    label="Address"
                  
                    ></v-text-field>

                    <v-text-field
                    v-model="borough"
                    
                    label="Borough"
                    
                    ></v-text-field>

                    <v-text-field
                    v-model="Cuisine_Type"
                    label="Cuisine Type"
                    
                    ></v-text-field>

                    <v-text-field
                    v-model="phone"
                    :counter="10"
                    label="Phone #"
                    
                    ></v-text-field>


                    <v-text-field
                    v-model="zip"
                    label="zipcode"
                    
                    ></v-text-field>

                    <v-select
                    v-model="grade"
                    :items="items"
                    
                    label="Grade"
                    
                    ></v-select>

                    <v-select
                    v-model="v_code"
                    :items="codes"
                    
                    label="Violation Code"
                    
                    ></v-select>

                    <v-select
                    v-model="critical_flag"
                    :items="flags"
                    label="Critical Flag"
                    
                    ></v-select>
                    

                    <v-btn
                    color="error"
                    class="mr-4"
                    @click="searching"
                    >
                    Search
                    </v-btn>

                </v-form>

              <div>
                <v-list three-line v-bind:class="{ active: isActive }">
      <v-list-item
        v-for="(item, i) in searching"
        :key="i"
        ripple
        @click="() => {}"
      >
        

        <v-list-item-content>
          <span
            class="text-uppercase font-weight-regular text-caption"
            v-text="item.cuisine_description"
          ></span>

          <div v-text="item.dba"></div>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
              
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
      codes: [],
      flags: [],
      
      search: '',
      camis_id: '',
      address: '',
      borough: '',
      Cuisine_Type: '',
      phone: '',
      zipcode: '',
      grade: '',
      v_code: '',
      critical_flag: '',

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


      this.items = results
      console.log(this.items)
    }

  }
</script>
<style >
.active{
  height: 800px;
  overflow-y:auto;

}
</style>
