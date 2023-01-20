<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <h2 class="guitar__title">{{ title }}</h2>
</template>

<style scoped>
.guitar__title {
  margin: 0 0 0.5rem 0;
}
</style>
