<script setup lang="tsx">
import { ref } from 'vue'
const helloMessage = ref<string>('Hello World!')
</script>

<template>
  <div class="flex justify-center mt-50">
    <h1 class="text-3xl font-semibold">{{ helloMessage }}</h1>
  </div>
</template>
