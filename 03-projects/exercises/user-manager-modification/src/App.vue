<script setup>
import CreateUserForm from './components/CreateUserForm.vue'
import AppTitle from './components/AppTitle.vue'
import UsersTable from './components/UsersTable.vue'
import { ref } from 'vue'
</script>

<template>
  <AppTitle />
  <div class="container">
    <CreateUserForm />
    <UsersTable />
  </div>
</template>

<style scoped></style>
