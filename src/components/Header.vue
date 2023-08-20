<template>
    <header class="header">
        <Transition name="header">
        <div v-show="header == true" class="header__content">
            <button @click="changeLang" v-if="lang == 'ru'" class="header__lang">uz</button>
            <button @click="changeLang" v-else class="header__lang">ru</button>
            <h1 class="header__title">{{ words.appbartitle[lang] }}</h1>
            <button @click="header = false" class="header__search">
                <img src="@/assets/img/search.svg" alt="">
            </button>
        </div>
        </Transition>
        <Transition name="header">
        <div v-show="header == false" class="header__form">
            <button @click="header = true, search='' " class="header__back">
                <img src="../assets/img/back.svg" alt="">
            </button>
            <input v-model="search" type="text" class="header__input container" :placeholder="words.appbarseacrch[lang]">
            <button @click="search=''" class="header__clear">
                <img src="../assets/img/close.svg" alt="">
            </button>
        </div>
        </Transition>
    </header>
</template>

<script>
export default {
    props: {
        lang: String
    },
    data(){
        return {
            header: true,
            search: ''
        }
    },
    watch: {
        search(val){
            this.$emit('getSearch', val)
        }
    },
    methods: {
        changeLang(){
            let val = this.lang == 'ru' ? 'uz' : 'ru';
            this.$emit('changeLang', val)
        }
    },
    inject: ['words']
}
</script>

<style lang="scss">
.header-enter-active,
.header-leave-active {
  transition: 0.5s ease;
}

.header-enter-from,
.header-leave-to {
  opacity: 0;
  transform: translateY(-150%);
}

.header {
    background: #F3EDF7;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.30), 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 14px 16px;
    height: 64px;
    position: relative;

    &__content, &__form {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: absolute;
        // width: 100%;
        // height: 100%;
        top: 14px;
        bottom: 14px;
        left: 16px;
        right: 16px;
    }

    &__lang {
        text-transform: uppercase;
        font-weight: 500;
    }

    &__title {
        color: #1C1B1F;
        text-align: center;
        font-size: 22px;
        font-weight: 400;
        line-height: 28px;
    }
    
    &__input {
        line-height: 20px;
        
        &::placeholder {
            color: #9D9D9D;
        }
    }
}
</style>