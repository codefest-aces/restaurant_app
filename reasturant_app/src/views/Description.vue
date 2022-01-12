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
          result: []  
        } 
    },

}
</script>

<style>

</style>