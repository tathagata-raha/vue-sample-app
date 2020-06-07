/* eslint-disable */

<template>
  <v-card
    class="mx-auto"
  >
    <v-row dense v-for="row in cards" :key="row[0].title">
      <v-col v-for="card in row" :key="card.title" :cols="3">
        <Card :card="card"/>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import axios from 'axios'
import Card from '../components/Card'
export default {
  data () {
    return {
      cards: [],
      selected_title: null
    }
  },
  components: {
    Card
  },
  methods: {
    show_desp (str) {
      if (this.selected_title === str) {
        this.selected_title = null
      } else {
        this.selected_title = str
      }
    }
  },
  mounted: function () {
    // fetch('http://www.omdbapi.com/?s=marvel&apikey=62d690d7', {
    //   method: 'get'
    // })
    //   .then((response) => {
    //     console.log(response.json())
    //   })
    let data = null
    const searchTerm = this.$route.params.search_param
    const type = this.$route.params.type
    console.log(searchTerm)
    if (type === 'books') {
      axios
        .get('https://www.googleapis.com/books/v1/volumes?maxResults=18&q=' + searchTerm)
        .then(response => {
          // this.cards=response.data.search
          data = response.data.items
          for (let i = 0; i < data.length / 4; i++) {
            const temp = []
            for (let j = 0; j < 4; j++) {
              if (i * 4 + j > data.length - 1) {
                break
              }
              const tempDict = {
                title: data[i * 4 + j].volumeInfo.title,
                image: data[i * 4 + j].volumeInfo.imageLinks.thumbnail,
                description: data[i * 4 + j].volumeInfo.description
              }
              temp.push(tempDict)
            }
            this.cards.push(temp)
          }
          console.log(this.cards)
        })
    } else if (type === 'movies') {
      axios
        .get('https://api.themoviedb.org/3/search/movie?api_key=7c2fb09b13aa4c7e484a90c663253330&language=en-US&page=1&include_adult=true&query=' + searchTerm)
        .then(response => {
          // this.cards=response.data.search
          data = response.data.results
          for (let i = 0; i < data.length / 4; i++) {
            const temp = []
            for (let j = 0; j < 4; j++) {
              if (i * 4 + j > data.length - 1) {
                break
              }
              const tempDict = {
                title: data[i * 4 + j].title,
                image: 'https://image.tmdb.org/t/p/w500' + data[i * 4 + j].poster_path,
                description: data[i * 4 + j].overview
              }
              temp.push(tempDict)
            }
            this.cards.push(temp)
          }
          console.log(this.cards)
        })
    }
  }
}
</script>
