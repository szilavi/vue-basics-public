<script setup>
import { onMounted } from 'vue'
import { useGuitarsStore } from './store/guitars'

const { guitars, fetchGuitars } = useGuitarsStore()

onMounted(async () => {
  await fetchGuitars()
  console.log(guitars.value)
})
</script>

<template>
  <div></div>
</template>

<style scoped></style>
