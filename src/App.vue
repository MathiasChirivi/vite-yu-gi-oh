<script>
import AppTitle from './components/AppTitle.vue'
import AppMain from './components/AppMain.vue'
import AppFilter from './components/AppFilter.vue'

import { store } from './data/store';
import { archeType } from './data/store';

import axios from 'axios';




export default {
  components: {
    AppTitle,
    AppMain,
    AppFilter

  },
  data() {
    return {
      store,
      archeType
    }
  },
  mounted() {
    axios.get(this.store.urlAPI).then(r => {
      store.cardElement = r.data.data;
      this.store.loading = false;
    }).catch(error => {
      console.error("LA chiamata non è andata a buon fine", error);
      store.cardElement = [];
    }),
      axios.get(this.archeType.urlAPI).then(result => {
        archeType.archeTypeList = result.data;
      })
  }
}
</script>

<template>
  <header>
    <AppTitle />
  </header>

  <main>
    <AppFilter />
    <AppMain v-if="store.loading == false" />
    <span v-else>Sono in attesa di dati</span>
  </main>

  <footer></footer>
</template>

<style scoped>
main {
  background-color: #C68636;
}
</style>
