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

              <h1>About Us</h1>
              <div id ="quote">
                <q>Can you imagine a world without food? Me, neither.</q>
                <p>-Anonymous</p>
              </div>
              <div class="about_main_content">
                <img src="../assets/food.jpeg" alt="Picture of food" style="padding: 10px;">
                <div id="about_content" style="padding: 10px;">
                  <p style="margin-bottom: 0;">As we all know, NYC is considered the food capital of the world. According to Vinepair, NYC alone has <q cite="https://vinepair.com/booze-news/new-york-restaurants-eat-at-every-on/">8,282</q> (Vine Pair) restaurant business which would mean it’ll take a person <q cite="https://vinepair.com/booze-news/new-york-restaurants-eat-at-every-on/">
              22.7 years and never go to same place twice.</q> (Vine Pair) With such plethora of choices, it can be quite overwhelming and super hard to choose.</p>
                  <p>Restaurant Violation Visualization WebApp is a web application which aims to visualize all restaurant in NYC along with their history of violations. Allowing users to make conscious healthy choices, driven by restaurant history data, on their choosing of cuisines in NYC. </p>
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
  width:33%;
  padding: 5px;
}
.about_content {
  float:right;
  width:67%;
}

</style>
