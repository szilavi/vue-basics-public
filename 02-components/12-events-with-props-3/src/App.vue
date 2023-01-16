<script setup>
import { reactive } from 'vue'
import InputField from './components/InputField.vue'

const formData = reactive({
  email: '',
  firstName: '',
  lastName: '',
})

function submitForm() {
  console.log(JSON.stringify(formData))
}
</script>

<template>
  <InputField
    id="email"
    v-model="formData.email"
    name="email"
    type="email"
    label="E-mail address"
  />
  <InputField
    id="firstname"
    v-model="formData.firstName"
    name="firstname"
    type="text"
    label="Firstname"
  />
  <InputField
    id="lastname"
    v-model="formData.lastName"
    name="lastname"
    type="text"
    label="Lastname"
  />
  <button @click="submitForm">Submit</button>
</template>

<style scoped></style>
