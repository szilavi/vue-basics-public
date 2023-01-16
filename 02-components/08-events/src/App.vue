<script setup>
import InputField from './components/InputField.vue'

function alertMessage() {
  alert('Input has focus')
}
</script>

<template>
  <InputField @on-focus="alertMessage" />
</template>

<style scoped></style>
