<template>
  <div id="app">
    <!-- don't need to pass info down through props now that store is set up -->
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
  </div>
</template>

<script>
import productListOne from './components/productListOne.vue';
import productListTwo from './components/productListTwo.vue';

export default {
  components: {
    'product-list-one': productListOne,
    'product-list-two': productListTwo
  },
  data () {
    return {
       
    }
  }
}
</script>

<style>
body {
  font-family: Georgia;
  color: #555;
}
</style>
