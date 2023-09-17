<template>
    <div>
        <img src="@/assets/img/sun.svg" v-if="icon == 1" alt="" class="day__icon">
        <img src="@/assets/img/cloudy.svg" v-else-if="icon == 2" alt="" class="day__icon">
        <img src="@/assets/img/small-rain.svg" v-else-if="icon == 3" alt="" class="day__icon">
        <img src="@/assets/img/mainly-cloudy.svg" v-else-if="icon == 4" alt="" class="day__icon">
        <img src="@/assets/img/rain.svg" v-else-if="icon == 9" alt="" class="day__icon">
        <img src="@/assets/img/small-rain-sun.svg" v-else-if="icon == 10" alt="" class="day__icon">
        <img src="@/assets/img/storm.svg" v-else-if="icon == 11" alt="" class="day__icon">
        <img src="@/assets/img/snow.svg" v-else-if="icon == 13" alt="" class="day__icon">
        <img src="@/assets/img/mist.svg" v-else-if="icon == 50" alt="" class="day__icon">
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>