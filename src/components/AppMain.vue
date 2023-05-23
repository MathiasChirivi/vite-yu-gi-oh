<script>
import { store } from '../data/store';

export default {
    name: "AppMain",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="container p-5">
        <div class="row">
            <div class="col-12 bg-black text-white py-3 mb-2">
                <span class="fw-bold">Found 50 cards</span>
            </div>
        </div>
        <div class="container h-100 row gap-3 bg-white justify-content-between ">
            <div v-for="card in store.cardElement"
                class="col-2 bgColorBody text-center d-flex flex-column justify-content-between p-0">
                <img :src="card.card_images[0].image_url" class="img-fluid">
                <div class=" border-bottom border-black text-white">{{ card.name }}</div>
                <div class=" border-top-0 fw-lighter text-white">{{ card.type }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bgColorBody {
    background-color: #D48F38;
}
</style>
