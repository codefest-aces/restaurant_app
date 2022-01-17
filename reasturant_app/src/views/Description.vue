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

              <!-- <h1>This is description page</h1>
              <p>this is {{camis}}</p> -->
                <!-- <v-btn @click= "requestCall">Show information</v-btn> -->
                <!-- <p>{{result}}</p> -->
                <!--Information about restaurant: Content-->
                <h1 class="name pt-5"> {{result[0].dba}}</h1>
                <!-- <div class="information" v-if="show_data === true"> -->
                <div class="information">
                <!----Map--->
                <!-- <Map v-bind:lat="result[0].latitude" v-bind:lon="result[0].longitude"/> -->
                  <div class = "basic_info my-5"> 
                    <div class="restaurant_map">
                      <l-map style="height: 300px" :zoom="zoom" :center="center">
                        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                        <l-marker :lat-lng="markerLatLng">
                        </l-marker>
                      </l-map>
                    </div>

                    <div class="restaurant_information">
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
                  </div> 
                  </div>
                  
                  
                <!---------->    
                  
                    
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
//import Map from "@/components/Map.vue"
import {LMap, LTileLayer, LMarker} from 'vue2-leaflet';
export default {
    props: ['camis'],
    // components: {
    //   Map
    // },
    components: {
      LMap,
      LTileLayer,
      LMarker
    },
    //trying to call to api
    data() {
        return {
          headers: [
              {text:'Date', value:'inspection_date'},
              {text:'Violation_code', value:'violation_code'},
              {text:'Violation_desc', value:'violation_description'},
              {text:'critical_flag', value:'critical_flag'},
              {text:'score', value:'score'},
              {text:'Grade', value:'grade'},
              {text:'Grade_date', value:'grade_date'},
              {text:'record_date', value:'record_date'},
              {text:'inspection_type', value:'inspection_type'}
          ],
          result: [],
          //show_data: false,
          url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
          zoom: 15,
          center: [51.505, -0.159],
          markerLatLng: [51.504, -0.159]
        } 
    },
    async mounted() {
      //console.log(this.camis)
            const axios = require('axios').default;
            let url = "https://data.cityofnewyork.us/resource/43nn-pn8j.json?camis=" + this.camis
            let response = await axios.get(url)
            console.log(response.data)
            this.result = response.data
            //console.log(`result is {this.result}`)
            this.show_data = !this.show_data
            this.center = [this.result[0].latitude, this.result[0].longitude]
            this.markerLatLng = [this.result[0].latitude, this.result[0].longitude]
    }

}
</script>

<style>
.basic_info {
  display: flex;
  margin-bottom: 10px;
  margin-top: 10px;
}
.restaurant_map{
  float:left;
  width:50%;
  padding: 5px;
}
.restaurant_info {
  float:right;
  width:67%;

}
.basic_info ul {
  list-style: none;
}
.name {
  text-align: center;
}

</style>