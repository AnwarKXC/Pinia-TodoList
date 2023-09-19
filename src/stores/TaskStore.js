import { defineStore } from "pinia"
export const useTaskStore = defineStore( 'taskStore', {
   state: () => ( {
      tasks: [
         { id: 1, title: 'buy some milk', isFav: true, checked: true },
         { id: 2, title: 'buy some milk2', isFav: true, checked: false },
         { id: 3, title: 'buy some milk3', isFav: true, checked: false },

      ],

   } ),
   getters: {
      favs () {
         return this.tasks.filter( task => task.isFav )
      },
      favsCount () {
         return this.tasks.reduce( ( acc, curr ) => {
            return curr.isFav ? acc + 1 : acc
         }, 0 )
      },
      totalCount: ( state ) => {
         return state.tasks.length
      }
   },
   actions: {
      addTask ( task ) {
         this.tasks.push( task )
      },
      deleteTask ( id ) {
         this.tasks = this.tasks.filter( t => {
            return t.id !== id
         } )
      },
      toggleFav ( id ) {
         const task = this.tasks.find( t => t.id === id )
         task.isFav = !task.isFav
      },
      toggleCheked ( id ) {
         const task = this.tasks.find( t => t.id === id )
         task.checked = !task.checked
      }
   }

} )