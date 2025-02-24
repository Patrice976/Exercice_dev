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
  <p>{{ tasks }}</p>

  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="task" placeholder="Inscrivez la tâche à ajouter dans la toDo" />
    <button @click="addTask()">Ajouter</button>
  </form>
</template>

<style scoped></style>
