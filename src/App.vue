<template>
  <main>
    <header>
      <img src="./assets//pinia-logo.svg" alt="logo">
      <h1> Pinia </h1>
      <AddForm/> 
    </header>
    <section class="task-list" v-if=" filter === 'all' ">
      <div class="filter">
        <button @click="filter = 'all'"> All Tasks</button>
        <button @click="filter = 'favs'">Fav Tasks</button>
      </div>
      <H1>All Tasks &nbsp; &nbsp; ({{ TaskStore.totalCount }})</H1>
      <div v-for="   task    of    TaskStore.tasks   ">
        <TaskDetails :task=" task " />
      </div>
    </section>
    <section class="task-list" v-if=" filter === 'favs' ">
      <H1>Favs Tasks &nbsp; &nbsp;({{ TaskStore.favsCount }})</H1>
      <div v-for="   task    of    TaskStore.favs   ">
        <TaskDetails :task=" task " />
      </div>
    </section>
  </main>
</template>

<script>
import { ref } from "vue"
import TaskDetails from "./components/TaskDetails.vue"
import { useTaskStore } from "./stores/TaskStore"
import AddForm from "./components/AddForm.vue"

export default {
  components: {
    TaskDetails,
    AddForm
},
  setup () {
    const TaskStore = useTaskStore()
    const filter = ref( 'all' )


    return { TaskStore, filter }
  }
}
</script>