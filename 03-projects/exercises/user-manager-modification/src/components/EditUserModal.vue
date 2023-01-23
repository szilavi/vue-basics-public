<script setup>
import { useUserStore } from '../stores/user'
import 'bootstrap/js/dist/modal.js'
import { computed } from 'vue'

const { modifyUser } = useUserStore()

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
})

const userFormData = computed(() => props.user)
</script>

<template>
  <div id="userModal" class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit user</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form v-if="userFormData" action="" class="form">
            <div class="mb-3">
              <label for="emailAddress">Email address</label>
              <input
                id="emailAddress"
                v-model="userFormData.emailAddress"
                type="text"
                class="form-control"
              />
            </div>
            <div class="mb-3">
              <label for="emailAddress">Firstname</label>
              <input
                id="firstName"
                v-model="userFormData.firstName"
                type="text"
                class="form-control"
              />
            </div>
            <div class="mb-3">
              <label for="emailAddress">Lastname</label>
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
            data-bs-dismiss="modal"
            @click="modifyUser(userFormData)"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
