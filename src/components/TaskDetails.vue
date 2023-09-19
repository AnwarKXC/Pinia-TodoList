<template>
   <div class="task" :class=" { activex: task.checked } ">
      <h3>{{ task.title }}</h3>
      <div class="icons">
         <i class="material-icons del" 
         
         @click="TaskStore.deleteTask( task.id )
         " >delete</i>
         <i class="material-icons" 
         :class="{active:task.isFav}"
         @click="TaskStore.toggleFav( task.id )">favorite</i>
         <input  type="checkbox" name="Done" id="Done" @click="TaskStore.toggleCheked(task.id)" >
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