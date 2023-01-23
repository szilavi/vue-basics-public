<script setup>
import { reactive, ref } from 'vue'
import { useUserStore } from '../stores/user'

const { addUser } = useUserStore()

const userFormInitialState = {
  emailAddress: '',
  firstName: '',
  lastName: '',
}
const userFormData = reactive({ ...userFormInitialState })
const isFormVisible = ref(false)
const userForm = ref()

function showForm() {
  isFormVisible.value = true
}

async function saveUser() {
  if (userForm.value.checkValidity()) {
    await addUser(userFormData)
    Object.assign(userFormData, userFormInitialState)
    isFormVisible.value = false
  }
}
</script>

<template>
  <button v-if="!isFormVisible" class="btn btn-primary mb-3" @click="showForm">
    Create new user
  </button>
  <div v-if="isFormVisible" class="d-flex flex-column align-items-center">
    <h2 class="h2 mb-3">Create a new user</h2>
    <form ref="userForm" action="" class="form" @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="emailAddress">Email address</label>
        <input
          id="emailAddress"
          v-model="userFormData.emailAddress"
          type="email"
          name="emailAddress"
          class="form-control d-block"
          required
        />
      </div>

      <div class="mb-3">
        <label for="firstName">Firstname</label>
        <input
          id="firstName"
          v-model="userFormData.firstName"
          minlength="2"
          class="form-control"
          type="text"
          name="firstName"
          required
        />
      </div>

      <div class="mb-3">
        <label for="lastName">Lastname</label>
        <input
          id="lastName"
          v-model="userFormData.lastName"
          minlength="2"
          type="text"
          name="lastName"
          class="form-control"
          required
        />
      </div>

      <div class="col-12">
        <button class="btn btn-primary btn-lg" @click="saveUser">Save</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.form {
  width: 100%;
}

@media (min-width: 992px) {
  .form {
    width: 50%;
  }
}

input:invalid {
  border-color: red;
}

input:valid {
  border-color: green;
}

input:focus:invalid {
  box-shadow: 0 0 0 0.25rem rgba(255, 0, 0, 0.25);
}

input:focus:valid {
  box-shadow: 0 0 0 0.25rem rgba(0, 255, 0, 0.25);
}
</style>
