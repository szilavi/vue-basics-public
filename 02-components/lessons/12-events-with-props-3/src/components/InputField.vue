<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
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

defineEmits(['update:modelValue'])
</script>

<template>
  <div>
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      :value="modelValue"
      :type="type"
      :name="name"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<style scoped>
div {
  margin: 0 0 1rem 0;
}

label {
  display: block;
  font-weight: bold;
  margin: 0 0 0.5rem 0;
}
</style>
