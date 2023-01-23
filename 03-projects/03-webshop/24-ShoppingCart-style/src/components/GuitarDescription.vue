<script setup>
defineProps({
  description: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <p class="guitar__description">{{ description }}</p>
</template>

<style scoped></style>
