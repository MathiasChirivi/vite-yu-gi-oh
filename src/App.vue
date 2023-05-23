<script>
import AppTitle from './components/AppTitle.vue'
import AppMain from './components/AppMain.vue'

import { store } from './data/store';
import axios from 'axios';




export default {
  components: {
    AppTitle,
    AppMain,

  },
  data() {
    return {
      store
    }
  },
  mounted() {
    axios.get(this.store.urlAPI).then(r => {
      store.cardElement = r.data.data;
    }).catch(errore => {
      console.log("Errore di chiamata")
    })
  }
}
</script>

<template>
  <header>
    <AppTitle />
  </header>

  <main>
    <AppMain />
  </main>

  <footer></footer>
</template>

<style scoped>
main {
  background-color: #C68636;
}
</style>
