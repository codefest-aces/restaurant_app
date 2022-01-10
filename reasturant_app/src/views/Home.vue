<template>
  <v-app id="inspire">

    <v-main class="grey lighten-3">
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
    <v-system-bar></v-system-bar>

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

    <v-card-text class="py-0">
      <v-chip
        v-for="(keyword, i) in keywords"
        :key="i"
        class="mr-2"
      >
        {{ keyword }}
      </v-chip>
    </v-card-text>

    <v-list three-line>
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
          <span
            class="text-uppercase font-weight-regular text-caption"
            v-text="item.category"
          ></span>

          <div v-text="item.title"></div>
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
        {

          title: 'Chens Garden',
          category: 'Chinese',
          keyword: 'Drinks',

        },
        {

          title: 'Eat Italian',
          category: 'Italian',
          keyword: 'Phones',
        },
        {

          title: 'Tonys Pizza',
          category: 'Pizza',
          keyword: 'Social',
        },
        {

          title: 'Misaki Sushi',
          category: 'Japanese',
          keyword: 'Military',
        },
        {

          title: 'McDonalds',
          category: 'Fast Food',
          keyword: 'Social',
        },
      ],
      search: '',
    }),

    computed: {
      keywords () {
        if (!this.search) return []

        const keywords = []

        for (const search of this.searching) {
          keywords.push(search.keyword)
        }

        return keywords
      },
      searching () {
        if (!this.search) return []

        const search = this.search.toLowerCase()

        return this.items.filter(item => {
          const text = item.title.toLowerCase()

          return text.indexOf(search) > -1
        })
      },
    },
  }
</script>
