<template>
  <v-app id="app">

    <v-main >
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

              <h1>About Us</h1>
              <div id ="quote">
                <q>Can you imagine a world without food? Me, neither.</q>
                <p>-Anonymous</p>
              </div>
              <div class="about_main_content">
                <img src="../assets/food.jpeg" alt="Picture of food" style="padding: 10px;">
                <div id="about_content" style="padding: 10px;">
                  <p style="margin-bottom: 0;"> As we all know, NYC is considered the food capital of the world. According to Vinepair, NYC alone has <q cite="https://vinepair.com/booze-news/new-york-restaurants-eat-at-every-on/">8,282</q> (Vine Pair) restaurant businesses which means that it would take a person nearly <q cite="https://vinepair.com/booze-news/new-york-restaurants-eat-at-every-on/">
              22.7 years and never go to same place twice.</q> (Vine Pair) With such a plethora of choices, it could be quite overwhelming and hard to choose a restaurant.</p>
                  <p> This Restaurant Violation Visualization WebApp is a web application which aims to visualize all restaurants in NYC along with their history of violations. This app allows users to make health conscious choices, via restaurant history data, on cuisines in NYC. </p>
                </div>
              </div>
              <br>
              <hr>
              <h2>Collaborators:</h2>
              <ul>
                <li>Saiman Tamang</li> 
                <li>Fourcan Abdullah</li>
                <li>Jonathan Shnayder</li>
                <li>Tony Wu</li>
              </ul>

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
    data: () => ({

    }),
  }
</script>

<style scoped>
h1,h2 {
  text-align: center;
}
#quote {
  text-align: center;
  font-style: italic;
}


.about_main_content {
  display: flex;
}
img{
  float:left;
  width:40%;
  padding: 5px;
}
.about_content {
  float:right;
  width:60%;
}
#app {
  background: url('https://wallpaperaccess.com/full/271708.jpg');
    /* no-repeat center center fixed !important; */
  background-size: 100% ;
  background-repeat: no-repeat;
  /* height:100% ;
  width: 100%; */
}

</style>
