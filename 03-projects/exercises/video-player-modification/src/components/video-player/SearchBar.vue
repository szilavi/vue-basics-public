<script setup>
import { ref } from 'vue'

const query = ref('')

defineEmits(['form-submit'])
</script>

<template>
  <div class="search-bar my-3">
    <form class="form" @submit.prevent="$emit('form-submit', query)">
      <div class="form-group d-flex justify-content-center">
        <input
          id="search"
          v-model="query"
          class="form-control form-control-lg w-50"
          type="text"
          placeholder="Search video"
        />
      </div>
    </form>
  </div>
</template>
