<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <img :src="`guitars/${title}.jpg`" :alt="title" class="guitar__image" />
</template>

<style scoped>
.guitar__image {
  height: 250px;
}
</style>
