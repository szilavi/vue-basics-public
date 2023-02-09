<script setup>
defineProps({
  body: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <p>{{ body }}</p>
</template>
