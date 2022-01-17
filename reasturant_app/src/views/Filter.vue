<template>
  <v-app id="inspire">

    <v-main class="grey lighten-3">
      <v-container>
        <v-row justify='center'>


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
                    v-model="Rest_dba"
                    label="Full Restaurant Name"

                    ></v-text-field>


                    <v-text-field
                    v-model="camis_id"

                    label="CAMIS ID"

                    ></v-text-field>

                    <v-text-field
                    v-model="address_apt"

                    label="Building #"

                    ></v-text-field>
                    <v-text-field
                    v-model="address_str"

                    label="Street Address"

                    ></v-text-field>

                    <v-select
                     v-model="borough"
                    :items="boroughs"
                    
                    label="Borough"
                  
                  ></v-select>

                    <v-select
                    v-model="Cuisine_Type"
                    :items="cuisine_list"
                    label="Cuisine Type"

                    ></v-select>

                    <v-text-field
                    v-model="phone"
                    :counter="10"
                    label="Phone #"

                    ></v-text-field>


                    <v-text-field
                    v-model="zipcode"
                    label="zipcode"

                    ></v-text-field>

                    <v-select
                    v-model="grade"
                    :items="grades"

                    label="Grade"

                    ></v-select>

                    <v-text-field
                    v-model="v_code"

                    label="Violation Code"

                    ></v-text-field>

                    <v-select
                    v-model="critical_flag"
                    :items="flags"
                    label="Critical Flag"

                    ></v-select>


                    <v-btn
                    color="error"
                    class="mr-4"
                    @click="searcher"
                    >
                    Search
                    </v-btn>

                </v-form>

                <div v-if="items.length == 0">
                  <H2>No Results</H2>
                </div>

              <div v-else>
                <v-list three-line v-bind:class="{ active: isActive }">
      <v-list-item
        v-for="(item,i) in items"
        :key="i"
        ripple
        @click="() => {}"
      >


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
      cuisine_list:[
        '',
      ],
      flags: [
        '',
        'Critical',
        'Not Critical'
      ],
      boroughs: [
        '',
        'Brooklyn',
        'Manhatten',
        'Bronx',
        'Queens',
        'Staten Island',
      ],
      grades:[
        '',
        'A',
        'B',
        'C',
        'N',
        'Z',
        'P',
        'G',
      ],
      
      Rest_dba: '',
      camis_id: '',
      address_apt: '',
      address_str: '',
      borough: null,
      Cuisine_Type: '',
      phone: '',
      zipcode: '',
      grade: null,
      v_code: '',
      critical_flag: '',

      isActive: false
    }),
    methods:{
      turnOff() {
        this.isActive = false
      },
      async searcher(){
        let url = "https://data.cityofnewyork.us/resource/43nn-pn8j.json?$where=inspection_date%20%3E%20'2020-01-01T00:00:00.000'"
        if (this.Rest_dba) {
          const Rest_dba = this.Rest_dba.toUpperCase()
          url=url+"&dba="+Rest_dba
        }
        if (this.camis_id) {
          url=url+"&camis="+this.camis_id
        }
        if(this.borough){
          url=url+'&boro='+this.borough
        }
        if (this.address_apt) {
          
          url=url+"&building="+this.address_apt
        }
        if (this.address_str) {
          const address_str = this.address_str.toUpperCase()
          url=url+"&street="+address_str
        }
        if(this.phone){
          url=url+'&phone='+this.phone
        }
        if(this.Cuisine_Type){
          url=url+'&cuisine_description='+this.Cuisine_Type
        }
        if(this.zipcode){
          url=url+'&zipcode='+this.zipcode
        }
        if(this.grade){
          
          url=url+'&grade='+this.grade
        }
        if(this.v_code){
          const v_code = this.v_code.toUpperCase()
          url=url+'&violation_code='+v_code
        }
        if(this.critical_flag){
          url = url+'&critical_flag='+this.critical_flag
        }
       const axios = require('axios').default;
            let response = await axios.get(url)
            console.log(response.data)
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

      let response = await axios.get("https://data.cityofnewyork.us/resource/43nn-pn8j.json?$select=distinct%20cuisine_description");

      let data = response.data
      console.log(data)
      let bob = []
      for(let i = 0; i<data.length; i++){
        if(data[i].cuisine_description != undefined){
          bob.push(data[i].cuisine_description)
        }
      }
      this.cuisine_list = bob
      console.log(this.cuisine_list)
    }

  }
</script>
<style >
.active{
  height: 800px;
  overflow-y:auto;

}
</style>
