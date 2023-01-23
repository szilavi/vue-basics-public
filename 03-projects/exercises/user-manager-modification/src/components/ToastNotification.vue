<script setup>
import { ref, watch } from 'vue'
import { Toast } from 'bootstrap'

const props = defineProps({
  visible: {
    type: Boolean,
    required: true,
  },
  themeType: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
})

const themes = {
  danger: ['bg-danger text-white'],
  success: ['bg-success text-white'],
  warning: ['bg-warning text-dark'],
  info: ['bg-info text-dark'],
}

const toastElement = ref()
const toast = new Toast(toastElement.value)

watch(props, () => {
  if (props.visible) toast.show()
  else toast.hide()
})
</script>

<template>
  <div
    ref="toastElement"
    class="toast align-items-center border-0"
    :class="themes[themeType]"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
  >
    <div class="d-flex">
      <div class="toast-body">{{ message }}</div>
      <button
        type="button"
        class="btn-close btn-close-white me-2 m-auto"
        data-bs-dismiss="toast"
        aria-label="Close"
      ></button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
