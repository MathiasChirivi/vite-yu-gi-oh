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
      this.store.cardElement = [];
      this.store.cardElement = r.data.data;
    })
    axios.get(this.archeType.urlAPI).then(a => {
      archeType.archeTypeList = a.data;
    })
  },
}
</script>

<template>
  <header>
    <AppTitle />
  </header>

  <main>
    <AppFilter />
    <AppMain />
    <!-- <span v-else>Sono in attesa di dati v-if="store.loading == false"</span> -->
  </main>

  <footer></footer>
</template>

<style scoped>
main {
  background-color: #C68636;
}
</style>
