<template>
   <div class="task">
      <h3>{{ task.title }}</h3>
      <div class="icons">
         <i class="material-icons" @click="TaskStore.deleteTask( task.id )">delete</i>
         <i class="material-icons" 
         :class="{active:task.isFav}"
         @click="TaskStore.toggleFav( task.id )">favorite</i>
      </div>
   </div>
</template>

<script>
import { useTaskStore } from '../stores/TaskStore'

export default {
   props: {
      task: Object,
   },
   setup () {
      const TaskStore = useTaskStore()
      return { TaskStore }
   }
}
</script>