<script setup>
import { onMounted } from 'vue'
import { useGuitarsStore } from './store/guitars'
import MainNavigation from './components/MainNavigation.vue'

const { guitars, fetchGuitars } = useGuitarsStore()

onMounted(async () => {
  await fetchGuitars()
  console.log(guitars.value)
})
</script>

<template>
  <MainNavigation />
</template>

<style scoped></style>
