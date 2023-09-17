<template>
    <div class="week" v-if="getDailyWeather">
        <div class="week__nav">
            <button @click="show = true" class="week__btn" :class="{active: show == true}">На неделю</button>
            <button @click="show = false" class="week__btn" :class="{active: show == false}">Отменить</button>
        </div>
        <div class="week__content" v-show="show">
            <Day v-for="item, index in sevenDays" :key="index" :day="item" 
            :index="index"/>
        </div>
    </div>
</template>

<script>
import Day from './Day.vue'
import { mapGetters, mapActions } from "vuex";
    export default {
        components: {
            Day
        },
        data() {
            return {
                show: true
            }
        },
        computed: {
            ...mapGetters(['getDailyWeather']),
            sevenDays(){
                this.getDailyWeather.pop()
                return this.getDailyWeather
            }
        },        
    }
</script>

<style lang="scss">

</style>