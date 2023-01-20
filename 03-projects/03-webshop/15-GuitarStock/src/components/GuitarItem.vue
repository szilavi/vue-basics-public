<script setup>
import GuitarDescription from './GuitarDescription.vue'
import GuitarImage from './GuitarImage.vue'
import GuitarPrice from './GuitarPrice.vue'
import GuitarRating from './GuitarRating.vue'
import GuitarStock from './GuitarStock.vue'
import GuitarTitle from './GuitarTitle.vue'

defineProps({
  guitar: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="guitar">
    <div class="left-column">
      <GuitarImage :title="guitar.title" />
    </div>
    <div class="right-column">
      <GuitarTitle :title="guitar.title" />
      <GuitarDescription :description="guitar.description" />
      <GuitarPrice :price="guitar.price" />
      <GuitarRating :rating="guitar.rating" />
      <GuitarStock :stock="guitar.stock" />
    </div>
  </div>
</template>

<style scoped>
.guitar {
  box-shadow: 0.25rem 0.1rem 0.5rem rgba(0, 0, 0, 0.15);
  display: flex;
  padding: 1rem;
  margin: 0 0 2rem 0;
}

.right-column {
  padding: 0 0 0 3rem;
}
</style>
