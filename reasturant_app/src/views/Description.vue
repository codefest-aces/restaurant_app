<template>
  <v-app id="inspire">
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12" sm="12" style="z-index:1;">
            <v-sheet min-height="70vh" rounded="lg">
                <!--Content-->
                <h1 class="name pt-5"> {{result[0].dba}}</h1>
                <div class="information">
                <!----Map--->
                  <div class = "basic_info my-5"> 
                    <div class="restaurant_map">
                      <l-map style="height: 300px" :zoom="zoom" :center="center">
                        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                        <l-marker :lat-lng="markerLatLng">
                        </l-marker>
                      </l-map>
                    </div>
                  <!--Information about restaurant-->
                    <div class="restaurant_information">
                    <ul>
                        <li>Camis: {{result[0].camis}}</li>
                        <li>Restaurant Name: {{result[0].dba}}</li>
                        <li>Building: {{result[0].building}}</li>
                        <li>Street: {{result[0].street}}</li>
                        <li>Borough: {{result[0].boro}}</li>
                        <li>Zipcode: {{result[0].zipcode}}</li>
                        <li>Phone: {{result[0].phone}}</li>
                        <li>Cuisine Description: {{result[0].cuisine_description}}</li>
                    </ul>
                  </div> 
                  </div>
                    <!--data of inspection results -->
                    <p class="update_date">As of: {{new Date(result[0].record_date).toLocaleDateString()}}</p>
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
import {LMap, LTileLayer, LMarker} from 'vue2-leaflet';
export default {
    props: ['camis'],
    components: {
      LMap,
      LTileLayer,
      LMarker
    },
    data() {
      return {
        headers: [
          {text:'INSPECTION DATE', value:'inspection_date'},
          {text:'VIOLATION CODE', value:'violation_code'},
          {text:'VIOLATION DESCRIPTION', value:'violation_description'},
          {text:'CRITICAL FLAG', value:'critical_flag'},
          {text:'SCORE', value:'score'},
          {text:'GRADE', value:'grade'},
          {text:'GRADE DATE', value:'grade_date'},
          {text:'INSPECTION TYPE', value:'inspection_type'}
        ],
        result: [],
        //show_data: false,
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution:
      '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        zoom: 15,
        center: [0,0],
        markerLatLng: [0,0]
      } 
    },
    async mounted() {
      //console.log(this.camis)
      const axios = require('axios').default;
      let url = "https://data.cityofnewyork.us/resource/43nn-pn8j.json?camis=" + this.camis
      let response = await axios.get(url)
      console.log(response.data)
      this.result = response.data
      //console.log(`result is ${JSON.stringify(this.result)}`)
      //console.log(new Date(this.result[0].inspection_date).toLocaleDateString())
      this.show_data = !this.show_data
      this.center = [this.result[0].latitude, this.result[0].longitude]
      this.markerLatLng = [this.result[0].latitude, this.result[0].longitude]
      //inspection_date, grade_date, record_date
      for(let i = 0; i < this.result.length; ++i) {
        this.result[i].inspection_date = new Date(this.result[i].inspection_date).toLocaleDateString()
        this.result[i].grade_date = new Date(this.result[i].grade_date).toLocaleDateString()
        //this.result[i].record_date = new Date(this.result[i].record_date).toLocaleDateString()
      }
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
.update_date {
  text-align: end;
  padding-right: 15px;
}

</style>