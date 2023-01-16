<script setup>
import InputField from './components/InputField.vue'

function logMessage(name) {
  console.log(name)
}
</script>

<template>
  <InputField @on-input="logMessage" />
</template>

<style scoped></style>
