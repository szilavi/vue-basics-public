<script setup>
import { onMounted } from 'vue'
import { useUserStore } from './store/user'

const { users, fetchUsers } = useUserStore()

onMounted(async () => {
  try {
    await fetchUsers()
  } catch (error) {
    alert('Failed to fetch users')
  }
})
</script>

<template>
  <table class="table table-striped table-fixed">
    <thead>
      <tr>
        <th>Email Address</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>&nbsp;</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.emailAddress }}</td>
        <td>{{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
        <td>
          <button class="btn btn-primary me-2">Edit</button>
          <button class="btn btn-danger">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
