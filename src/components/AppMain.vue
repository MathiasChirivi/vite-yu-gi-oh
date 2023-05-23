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
    <div class="container p-5 ">
        <div class="row">
            <div class="col-12 bg-black text-white py-3 mb-2">
                <span class="fw-bold">Found 50 cards</span>
            </div>
        </div>
        <div class="row gap-4 d-flex">
            <div v-for="card in store.cardElement" class="col-2">
                <div class="card cardBody ">
                    <img :src="card.card_images[0].image_url">
                    <div class="card-body minmaxHeight">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item border-bottom border-black">{{ card.name }}</li>
                            <li class="list-group-item border-bottom fw-lighter">{{ card.type }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.minmaxHeight {
    min-height: 200px;
    background-color: #D48F38;
}

.cardBody {
    padding: 15px;
    width: 14rem;
}
</style>
