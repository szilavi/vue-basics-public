<script setup>
import { ref, computed } from 'vue'

const username = ref('')
const password = ref('')
const confirmPassword = ref('')
const form = ref()

const usernameError = computed(() => username.value.length < 5)

const passwordError = computed(
  () => password.value.length < 8 || password.value === username.value
)

const confirmPasswordError = computed(
  () =>
    confirmPassword.value.length < 8 || confirmPassword.value !== password.value
)

function submitForm() {
  if (
    !usernameError.value &&
    !passwordError.value &&
    !confirmPasswordError.value
  ) {
    alert(
      `Username: ${username.value}\nPassword: ${password.value}\nConfirm Password: ${confirmPassword.value}`
    )
    form.value.reset()
  }
}
</script>

<template>
  <form ref="form" @click.prevent="submitForm">
    <div class="form-group">
      <label>Username:</label>
      <input v-model="username" />
      <p v-if="usernameError" class="error">
        Username must be at least 5 characters long and different from password
      </p>
    </div>
    <div class="form-group">
      <label>Password:</label>
      <input v-model="password" type="password" />
      <p v-if="passwordError" class="error">
        Password must be at least 8 characters long and different from username
      </p>
    </div>
    <div class="form-group">
      <label>Confirm Password:</label>
      <input v-model="confirmPassword" type="password" />
      <p v-if="confirmPasswordError" class="error">
        Confirm password must be at least 8 characters long and match with
        password
      </p>
    </div>
    <button>Submit</button>
  </form>
</template>

<style scoped>
.error {
  font-size: 0.75rem;
  font-style: italic;
}

.form-group {
  margin: 0 0 1rem 0;
}

label {
  display: block;
  font-weight: 500;
  margin: 0 0 0.25rem 0;
}
</style>
