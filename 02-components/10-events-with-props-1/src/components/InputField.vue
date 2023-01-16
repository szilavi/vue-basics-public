<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
})

defineEmits(['on-input'])
</script>

<template>
  <label :for="id">{{ label }}</label>
  <input
    :id="id"
    :type="type"
    :name="name"
    @input="$emit('on-input', $event.target.value)"
  />
</template>

<style scoped>
label {
  display: block;
  font-weight: bold;
  margin: 0 0 0.5rem 0;
}
</style>
