<script setup>
import { ref } from 'vue'
let tasks = ref([])
let task = ref()

function addTask() {
  tasks.value.push({
    title : task.value,
  completed: false,
  date : Date.now(),})
  task.value = ''
}
</script>

<template>
  <p v-if="tasks.length === 0">Il n'y a aucune tâche à réaliser</p>
  <div v-else>
  <ul>
    <li v-for="(toDo,index) in tasks" :key="index" :class ="{completed:toDo.completed}">
      <input type="checkbox" v-model ="toDo.completed"   /><span>{{ toDo.title }}</span>
    </li>
  </ul>
  </div>

  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="task" placeholder="Inscrivez la tâche à ajouter dans la toDo" />
    <button @click="addTask()">Ajouter</button>
  </form>
</template>

<style scoped>
.toDo {
  margin : 1rem
}
.completed {
  opacity : .5 ;
  text-decoration: line-through;
}</style>


