import { reactive } from 'vue'

export const store = reactive({
    // loading: true,
    urlAPI: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset='",
    cardElement: [],
    loading: false
});
export const archeType = reactive({
    // loading: true,
    urlAPI: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    archeTypeList: [],
    urlAPIArche: "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=",
});
