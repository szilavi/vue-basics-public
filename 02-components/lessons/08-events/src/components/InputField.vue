<script setup>
defineEmits(['on-focus'])
</script>

<template>
  <input type="text" @click="$emit('on-focus')" />
</template>

<style scoped></style>
