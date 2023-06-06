<script setup>
import { onMounted } from 'vue'
import { useUserStore } from './store/user'
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
    <UsersTable />
  </div>
</template>

<style scoped></style>
