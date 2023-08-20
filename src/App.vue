<template>
  <div>
    <Header @getSearch="search = $event" :lang="lang" @changeLang="changeLang"/>
    <Notes 
    :notesList="filterNotes" 
    @delNote="delNote" 
    @editNote="editNote"
    :lang="lang"/>
    
    <Modal 
    v-show="modalOpen" 
    @closeModal="closeModal" 
    :currentId="currentId" 
    @addNote="addNote" 
    :edit="edit"
    :changeNote="changeNote"
    @editedNote="editedNote"
    :lang="lang"
    />
    
    <AddButton @openModal="openModal" />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Notes from './components/Notes.vue';
import Modal from './components/Modal.vue';
import AddButton from './components/AddButton.vue';
import langs from './lang';
// import { vasya, petya } from "./lang";
console.log(langs);
// console.log(vasya);
// console.log(petya);

export default {
  components: {
    Header,
    Notes,
    Modal,
    AddButton
  },
  data() {
    return {
      notes: [
        {
          id: 1,
          title: 'Vue',
          date: '07.03.2022',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
        },
        {
          id: 2,
          title: 'React',
          date: '15.05.2023',
          desc: 'Lorem ipsum dolor sit amet'
        },
        {
          id: 3,
          title: 'Angular',
          date: '25.12.2023',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
        },
      ],
      modalOpen: false,
      currentId: 4,
      edit: false,
      changeNote: {},
      search: '',
      lang: 'ru',
      langwords: {}
    }
  },
  computed: {
    filterNotes(){
      let items = this.notes.filter( (elem)=> {
        let result = elem.title.toLowerCase().includes(this.search.toLowerCase())
        return result;
      })
      return items
    }
  },
  methods: {
    openModal() {
      this.modalOpen = true;
    },
    closeModal() {
      this.modalOpen = false;
      setTimeout(() => {
        this.edit = false;
      }, 500);      
    },
    addNote(item) {
      this.notes.push(item)
    },
    delNote(id) {
      let index = this.notes.findIndex((elem) => { return elem.id == id })
      this.notes.splice(index, 1)
    },
    getNotes(){
      let localNotes = localStorage.getItem('notes');
      localNotes = JSON.parse(localNotes)
      if (localNotes) {
        this.notes = localNotes;
        let lastIndex = this.notes.length - 1;
        this.currentId = lastIndex >= 0 ? this.notes[lastIndex].id + 1 : 1
      }
    },
    editNote(id){
      let val = this.notes.find( elem => elem.id == id)
      this.changeNote = val;
      this.edit = true;
      this.modalOpen = true;
    },
    editedNote(item){
      this.notes.forEach((elem)=>{
        if (elem.id == item.id) {
          elem.title = item.title;
          elem.desc = item.desc;
          elem.date = item.date;
        }
      })
    },
    changeLang(val){
      this.lang = val;
      localStorage.setItem('lang', val)
    }
  },
  watch: {
    notes: {
      handler() {
        localStorage.setItem('notes', JSON.stringify(this.notes))
      },
      deep: true
    }
  },
  created(){
    this.getNotes();
    this.langwords = langs;
    this.lang = localStorage.getItem('lang') || 'ru'
  },
  provide: {
    words: langs
  }
}
</script>

<style scoped></style>