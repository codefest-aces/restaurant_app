<template>
  <v-app id="inspire">

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>


          <v-col
            cols="12"
            sm="12"
          >
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <!--  -->

              <h1>This is description page</h1>
              <p>this is {{camis}}</p>
                <v-btn @click= "requestCall">Show information</v-btn>
                <!-- <p>{{result}}</p> -->
                <!--Information about restaurant: Content-->
                <div class="information" v-if="show_data === true">
                    <ul>
                        <li>Camis: {{result[0].camis}}</li>
                        <li>DBA: {{result[0].dba}}</li>
                        <li>Building: {{result[0].building}}</li>
                        <li>Borough: {{result[0].boro}}</li>
                        <li>Street: {{result[0].street}}</li>
                        <li>Zipcode: {{result[0].zipcode}}</li>
                        <li>Phone: {{result[0].phone}}</li>
                        <li>Cuisine Description: {{result[0].cuisine_description}}</li>
                    </ul>
                    <!--data of inspection results -->
                <!-- <ul>
                    <li v-for="(character,index) in result" :key="character.camis">{{index}}- {{character}}</li>
                </ul> -->

                    <v-data-table
                        :headers="headers"
                        :items="result"
                        :items-per-page="5"
                        class="elevation-1">
                    </v-data-table>


                </div>
                
              <!---->
            </v-sheet>
          </v-col>

        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
    props: ['camis'],
    //trying to call to api
    data() {
        return {
          headers: [
              {text:'Date', value:'inspection_date'},
              {text:'Action', value:'action'},
              {text:'Violation_code', value:'violation_code'},
              {text:'Violation_desc', value:'violation_description'},
              {text:'Violation_code', value:'violation_code'},
              {text:'critical_flag', value:'critical_flag'},
              {text:'score', value:'score'},
              {text:'Grade', value:'grade'},
              {text:'Grade_date', value:'grade_date'},
              {text:'record_date', value:'record_Date'},
              {text:'inspection_type', value:'inspection_type'}
          ],
          result: [],
          show_data: false  
        } 
    },
    methods: {
        async requestCall() {
            //console.log(this.camis)
            const axios = require('axios').default;
            let url = "https://data.cityofnewyork.us/resource/43nn-pn8j.json?camis=" + this.camis
            let response = await axios.get(url)
            console.log(response.data)
            this.result = response.data
            //console.log(`result is {this.result}`)
            this.show_data = !this.show_data
        }
    }

}
</script>

<style>

</style>