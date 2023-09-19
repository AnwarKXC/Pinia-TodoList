<template>
   <form @submit.prevent=" submitHandler ">
      <input type="text" name="I need to ... " placeholder="I need to ..." v-model=" newTask ">
      <button>New Task</button>
   </form>
</template>

<script>
import { ref } from 'vue'
import { useTaskStore } from '../stores/TaskStore'

export default {
   setup () {
      const TaskStore = useTaskStore()
      const newTask = ref( '' )
      const submitHandler = () => {
         if ( newTask.value.length !== 0 ) {
            TaskStore.addTask( {
               title: newTask.value,
               isFav: false,
               checked:false,
               id: Math.floor( Math.random() * 99999 )
            } )
            newTask.value=''
         }
      }
      return{submitHandler,newTask}
   }
}
</script>