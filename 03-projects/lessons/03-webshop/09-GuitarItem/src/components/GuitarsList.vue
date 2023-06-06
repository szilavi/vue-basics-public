<script setup>
import { onMounted } from 'vue'
import { useGuitarsStore } from '../store/guitars'
import GuitarItem from './GuitarItem.vue'
const { guitars, fetchGuitars } = useGuitarsStore()

onMounted(() => {
  fetchGuitars()
})
</script>

<template>
  <div class="guitars">
    <GuitarItem v-for="guitar in guitars" :key="guitar.id" :guitar="guitar" />
  </div>
</template>

<style scoped></style>
