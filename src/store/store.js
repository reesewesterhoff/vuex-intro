// needed for store to work
import Vue from 'vue';
import Vuex from 'vuex';

// tell vue that we're using vuex
Vue.use(Vuex);

// define store, give it data initially stored in App.vue
export const store = new Vuex.Store({
    state: {
        products: [
            {name: 'Banana Skin', price: 20},
            {name: 'Shiny Star', price: 40},
            {name: 'Green Shells', price: 60},
            {name: 'Red Shells', price: 80}
        ]
    },
    // store reusable code/calculations here, keeps code dry
    getters: {
        saleProducts: state => {
            let saleProducts = state.products.map(product => {
                return {
                    name: '**' + product.name + '**',
                    price: product.price/2
                }
            });
            return saleProducts;
        }
    }
});
