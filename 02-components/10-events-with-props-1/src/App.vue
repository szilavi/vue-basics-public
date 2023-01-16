<script setup>
import { ref } from 'vue'
import InputField from './components/InputField.vue'

const email = ref('')

function updateEmail(value) {
  email.value = value
  console.log(email.value)
}
</script>

<template>
  <InputField
    id="email"
    name="email"
    type="email"
    label="E-mail address"
    @on-input="updateEmail"
  />
</template>

<style scoped></style>
