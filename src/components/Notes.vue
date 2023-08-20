<template>
    <section class="notes">
        <div class="container">
            <div class="notes__top">
                <h2 class="notes__title">{{ notesList.length > 0 ? words.infobar[lang] : words.noinfobar[lang] }}</h2>
                <button @click="grid = !grid" class="notes__btn">
                    <img v-if="grid" src="../assets/img/list.svg" alt="">
                    <img v-else src="../assets/img/grid.svg" alt="">
                    <span>{{ grid ? words.list[lang] : words.grid[lang]}}</span>
                </button>
            </div>
            <div class="notes__list" :class="{ active: !grid }">
                <NotesCard 
                v-for="item in notesList" :key="item.id" 
                :grid="grid"
                :note="item"
                @delNote="$emit('delNote', item.id)"
                @editNote="$emit('editNote', item.id)"
                :lang="lang"
                />
            </div>
        </div>
    </section>
</template>

<script>
import NotesCard from './Notes-Card.vue'
    export default {
        components: {
            NotesCard
        },
        props: {
            notesList: Array,
            lang: String
        },
        data(){
            return {
                grid: true
            }
        },
        inject: ['words']
    }
</script>

<style lang="scss">
.notes {
    margin-top: 30px;
    
    &__top {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    &__title {
        color: #323232;
        font-size: 22px;
        font-weight: 400;
        line-height: 28px; 
    }
    
    &__btn {
        border-radius: 16px;
        background: linear-gradient(0deg, rgba(103, 80, 164, 0.11) 0%, rgba(103, 80, 164, 0.11) 100%), #FFFBFE;
        box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.30), 0px 4px 8px 3px rgba(0, 0, 0, 0.15);
        padding: 16px 20px 16px 16px;
        color: #6750A4;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px; 
        letter-spacing: 0.1px;
        display: flex;
        align-items: center;
        gap: 12px;
    }
    
    &__list {
        display: grid;
        margin-top: 30px;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
        
        &.active {
            grid-template-columns: repeat(1, 1fr);
        }
    }
}
</style>