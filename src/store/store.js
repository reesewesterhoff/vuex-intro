// needed for store to work
import Vue from 'vue';
import Vuex from 'vuex';

// tell vue that we're using vuex
Vue.use(Vuex);

// define store, give it data initially stored in App.vue
const store = new Vuex.Store({
    state: {
        products: [
            {name: 'Banana Skin', price: 20},
            {name: 'Shiny Star', price: 40},
            {name: 'Green Shells', price: 60},
            {name: 'Red Shells', price: 80}
        ]
    }
});

export default store;