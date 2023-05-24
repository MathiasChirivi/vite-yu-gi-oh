<script>
import { store } from '../data/store';
import { archeType } from '../data/store';

export default {
    name: "AppFilter",
    data() {
        return {
            store,
            archeType,
            selectedOption: "all"
        }
    },
    methods: {
        SelectionChange() {
            console.log('Opzione selezionata:', this.selectedOption);
        }
    }
}
</script>

<template>
    <div class="container p-5">
        <select v-model="selectedOption" @change="SelectionChange" class="form-select formSelect">
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