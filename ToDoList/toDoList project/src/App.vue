<script setup>
import { ref } from 'vue'
let tasks = ref([])
let task = ref()

function addTask() {
  tasks.value.push(task.value)
  task.value = ''
}
</script>

<template>
  <p v-if="tasks.length === 0">Il n'y a aucune tâche à réaliser</p>
  <ul>
    <li v-for="(toDo,index) in tasks" :key="index">
      <input type="checkbox" /><span class="toDo">{{ toDo }}</span>
    </li>
  </ul>

  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="task" placeholder="Inscrivez la tâche à ajouter dans la toDo" />
    <button @click="addTask()">Ajouter</button>
  </form>
</template>

<style scoped>
.toDo {
  margin : 1rem
}</style>
