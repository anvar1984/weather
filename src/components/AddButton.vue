<template>
    <button @click="$emit('openModal')" class="add">
        <img src="../assets/img/edit.svg" alt="">
    </button>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">
.add {
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.30), 0px 4px 8px 3px rgba(0, 0, 0, 0.15);
    border-radius: 16px;
    background: linear-gradient(0deg, rgba(103, 80, 164, 0.11) 0%, rgba(103, 80, 164, 0.11) 100%), #FFFBFE;
    padding: 16px;
    position: fixed;
    bottom: 30px;
    right: 30px;
}
</style>