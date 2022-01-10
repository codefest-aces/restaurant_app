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
              
                <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                >
                    <v-text-field
                    v-model="name"
                    :counter="10"
                    :rules="nameRules"
                    label="Restaurant Name"
                    required
                    ></v-text-field>

                    <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                    ></v-text-field>

                    <v-text-field
                    v-model="name"
                    :counter="10"
                    :rules="nameRules"
                    label="CAMIS ID"
                    required
                    ></v-text-field>

                    <v-text-field
                    v-model="name"
                    :counter="10"
                    :rules="nameRules"
                    label="Address"
                    required
                    ></v-text-field>

                    <v-text-field
                    v-model="name"
                    :counter="10"
                    :rules="nameRules"
                    label="Borough"
                    required
                    ></v-text-field>

                    <v-text-field
                    v-model="name"
                    :counter="10"
                    :rules="nameRules"
                    label="Cuisine Type"
                    required
                    ></v-text-field>

                    <v-text-field
                    v-model="name"
                    :counter="10"
                    :rules="nameRules"
                    label="Phone #"
                    required
                    ></v-text-field>


                    <v-text-field
                    v-model="name"
                    :counter="5"
                    :rules="nameRules"
                    label="Zipcode"
                    required
                    ></v-text-field>

                    <v-select
                    v-model="select"
                    :items="items"
                    :rules="[v => !!v || 'Item is required']"
                    label="Grade"
                    required
                    ></v-select>

                    <v-select
                    v-model="select"
                    :items="items"
                    :rules="[v => !!v || 'Item is required']"
                    label="Violation Code"
                    required
                    ></v-select>

                    <v-select
                    v-model="select"
                    :items="items"
                    :rules="[v => !!v || 'Item is required']"
                    label="Critical Flag"
                    required
                    ></v-select>
                    

                    <v-btn
                    :disabled="!valid"
                    color="success"
                    class="mr-4"
                    @click="validate"
                    >
                    Validate
                    </v-btn>

                    <v-btn
                    color="error"
                    class="mr-4"
                    @click="reset"
                    >
                    Reset Form
                    </v-btn>

                    <v-btn
                    color="warning"
                    @click="resetValidation"
                    >
                    Reset Validation
                    </v-btn>
                </v-form>

              <div>
    <ul v-for="post in posts" v-bind:key="post.camis">
      <li>{{ post.dba }}</li>
      <p>{{ post.violation_description }}</p>
    </ul>
  </div>
              
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
      posts: [],
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
      async getData() {
      try {
        let response = await fetch("https://data.cityofnewyork.us/resource/43nn-pn8j.json?$where=score%20==100");
        this.posts = await response.json();;
      } catch (error) {
        console.log(error);
      }
    },
  },

  created() {
    this.getData();
  },

  }
</script>
