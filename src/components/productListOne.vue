<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
        <li v-for="product in saleProducts" :key="product.name">
            <span class="name">{{product.name}}</span>
            <span class="price">${{product.price}}</span>
        </li>
    </ul>
    <!-- can pass through parameters to mutations and actions -->
    <button v-on:click="reducePrice(4)">Reduce Price</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
    // see productListTwo
    computed: {
        products() {
            return this.$store.state.products
        },
        // saleProducts() {
        //     return this.$store.getters.saleProducts;
        // }

        // can use this and list getters in store instead of writing out
        // every function
        ...mapGetters([
            'saleProducts',
            // 'nextGetter',
        ])
    },
    methods: {
        // can use this and list actions in store instead of writing out
        // every function
        ...mapActions([
            'reducePrice'
        ])
        // reducePrice: function(amount) {
            // how it would look if we wrote function here
            // this.$store.state.products.forEach(product => {
            //     product.price -= 1;
            // })
            
            // instead we commit mutations in the store
            // trackable
            // parameter is whatever you called mutation in the store
            // this.$store.commit('reducePrice');

            // best practice is to dispatch an action to the store
            // use the action to do asynchronous code and when it's completed
            // commit the mutation from the action
            // helps with debugging
            // this.$store.dispatch('reducePrice', amount);
        // }
    }
}
</script>

<style scoped>
#product-list-one{
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-one ul{
    padding: 0;
}
#product-list-one li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #E8800C;
}
</style>
