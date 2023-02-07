<script setup>
defineProps({
  stock: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <div class="guitar__stock">
    <span v-if="stock === 0" class="text-red">Out of stock</span>
    <span v-else-if="stock < 3" class="text-orange">
      Last chance, only {{ stock }} left
    </span>
    <span v-else class="text-green">In stock</span>
  </div>
</template>

<style scoped>
.guitar__stock {
  font-weight: bold;
}
</style>
