<script>
import { store } from '../data/store';
import { archeType } from '../data/store';
import axios from 'axios';

export default {
    name: "AppFilter",
    data() {
        return {
            store,
            archeType,
            selectedOption: null
        }
    },
    methods: {
        SelectionChange() {
            console.log('Opzione selezionata:', this.selectedOption);
        },
        newArchetype() {
            let addresOfArchetype = this.archeType.urlAPIArche + this.selectedOption;
            this.chiamataArchetipo(addresOfArchetype);
        },
        chiamataArchetipo(addresOfArchetype) {
            axios.get(addresOfArchetype).then(r => {
                this.store.cardElement = [];
                this.store.cardElement = r.data.data
            });
        },
    },
}
</script>

<template>
    <div class="container p-5">
        <select v-model="selectedOption" @change="newArchetype" class="form-select formSelect">
            <option v-for="archeTypi in archeType.archeTypeList">{{ archeTypi.archetype_name }}</option>
        </select>
    </div>
</template>

<style scoped>
.formSelect {
    width: 25% !important;
    margin-bottom: 20px;
}
</style>