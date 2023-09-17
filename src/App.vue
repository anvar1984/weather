<template>
  <div class="container" v-if="getFullWeather">
    <Header/>
    <Current/>
    <Week/>
  </div>
  <div class="loading" v-else>
        <img src="./assets/img/loading.gif" alt="">
    </div>
</template>

<script>
import Header from './components/Header/Header.vue';
import Current from './components/Current/Currnet.vue';
import Week from './components/Week/Week.vue'
import { mapGetters, mapActions } from "vuex";
  export default {
    components: {
      Header,
      Current,
      Week
    },
    methods: {
        ...mapActions(['setWeather'])
    },
    created() {
        setTimeout(() => {
            this.setWeather()            
        }, 1000);
    },
    computed: {
        ...mapGetters(['getFullWeather']),
      }
  }
</script>

<style lang="scss">

</style>