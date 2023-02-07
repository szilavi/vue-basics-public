<script setup>
import { ref } from 'vue'
import InputField from './components/InputField.vue'

const email = ref('example@gmail.com')
</script>

<template>
  <InputField
    id="email"
    v-model="email"
    name="email"
    type="email"
    label="E-mail address"
  />
  {{ email }}
</template>

<style scoped></style>
