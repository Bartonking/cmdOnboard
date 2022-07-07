<script setup lang="ts">
  import { ref } from 'vue'
  const name = ref("")
</script>
<template>
  <div>
    <p> I am from home page</p>
    <InputText v-model="name" placeholder="Enter name here"></InputText>
    <h3>My Name is {{name}}</h3>
  </div>
</template>