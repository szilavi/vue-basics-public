<script setup>
import { ref } from 'vue'

const query = ref('')

defineEmits(['form-submit'])
</script>

<template>
  <div class="search-bar my-3" @submit.prevent="$emit('form-submit', query)">
    <form action="" class="form">
      <div class="form-group d-flex justify-content-center">
        <input
          id="search"
          v-model="query"
          type="text"
          class="form-control form-control-lg w-50"
          placeholder="Search video"
        />
      </div>
    </form>
  </div>
</template>

<style scoped></style>
