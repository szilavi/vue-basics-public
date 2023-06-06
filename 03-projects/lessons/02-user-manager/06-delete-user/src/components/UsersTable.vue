<script setup>
import { useUserStore } from '../store/user'

const { users, removeUser } = useUserStore()

async function handleDeleteClick(id) {
  try {
    const confirmDelete = confirm('Are you sure?')
    if (confirmDelete) {
      await removeUser(id)
    }
  } catch (error) {
    alert('Can not remove user')
  }
}
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
          <button class="btn btn-danger" @click="handleDeleteClick(user.id)">
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
