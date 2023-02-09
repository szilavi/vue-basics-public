<script setup>
import { ref } from 'vue'

const query = ref('')

defineEmits(['search-articles'])
</script>

<template>
  <div @submit.prevent="$emit('search-articles', query)">
    <form action="">
      <div>
        <input
          id="search"
          v-model="query"
          type="text"
          placeholder="Search article"
        />
        <button>Search</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
div {
  display: flex;
}
</style>
