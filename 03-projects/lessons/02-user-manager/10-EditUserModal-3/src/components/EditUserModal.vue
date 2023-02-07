<script setup>
import { ref, watch } from 'vue'
import { useUserStore } from '../../store/user'
import 'bootstrap/js/dist/modal'

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
})

const userFormData = ref(props.user)
const { modifyUser } = useUserStore()
const closeButton = ref()

watch(
  () => props.user,
  (value) => (userFormData.value = value)
)

async function handleSaveButtonClick() {
  try {
    await modifyUser(userFormData.value)
    closeButton.value.click()
  } catch (error) {
    alert(error.message)
  }
}
</script>

<template>
  <div
    id="editUserModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="editUserModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="editUserModalLabel" class="modal-title fs-5">Edit user</h5>
          <button
            ref="closeButton"
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form action="">
            <div class="mb-3">
              <label for="emailAddress">Email address</label>
              <input
                id="emailAddress"
                v-model="userFormData.emailAddress"
                type="email"
                class="form-control"
              />
            </div>
            <div class="mb-3">
              <label for="firstName">First name</label>
              <input
                id="firstName"
                v-model="userFormData.firstName"
                type="text"
                class="form-control"
              />
            </div>
            <div class="mb-3">
              <label for="lastName">Last name</label>
              <input
                id="lastName"
                v-model="userFormData.lastName"
                type="text"
                class="form-control"
              />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="handleSaveButtonClick"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
