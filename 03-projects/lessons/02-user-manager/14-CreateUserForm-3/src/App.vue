<script setup>
import { onMounted } from 'vue'
import { useUserStore } from '../store/user'
import CreateUserForm from './components/CreateUserForm.vue'
import UsersTable from './components/UsersTable.vue'

const { fetchUsers } = useUserStore()

onMounted(async () => {
  try {
    await fetchUsers()
  } catch (error) {
    alert('Failed to fetch users')
  }
})
</script>

<template>
  <div class="container">
    <CreateUserForm />
    <UsersTable />
  </div>
</template>

<style scoped></style>
