<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <RouterLink :to="{ name: 'taskPage' }">Task Page</RouterLink>
  <RouterView />
</template>

<style scoped></style>
