<script setup>
import { onMounted, ref } from 'vue'
import { useUserStore } from '../stores/user'
import EditUserModal from './EditUserModal.vue'

const { users, fetchUsers, removeUser } = useUserStore()

const selectedUser = ref({})

function selectUser(user) {
  selectedUser.value = user
}

onMounted(() => {
  fetchUsers()
})
</script>

<template>
  <div>
    <table class="table table-striped table-fixed">
      <thead>
        <th>Email address</th>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>&nbsp;</th>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>
            {{ user.emailAddress }}
          </td>
          <td>
            {{ user.firstName }}
          </td>
          <td>
            {{ user.lastName }}
          </td>
          <td>
            <button
              data-bs-toggle="modal"
              data-bs-target="#userModal"
              class="btn btn-primary me-2"
              @click="selectUser(user)"
            >
              Edit
            </button>

            <button class="btn btn-danger me-2" @click="removeUser(user.id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <EditUserModal :user="selectedUser" />
</template>

<style scoped></style>
