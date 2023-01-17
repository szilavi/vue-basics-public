<script setup>
import {
  ref,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
} from 'vue'

const title = ref('Title')

onBeforeMount(() => console.log('before mount'))
onMounted(() => console.log('mounted'))
onBeforeUpdate(() => console.log('before update'))
onUpdated(() => console.log('updated'))
onBeforeUnmount(() => console.log('before unmount'))
onUnmounted(() => console.log('unmounted'))

setTimeout(() => (title.value = 'New title'), 2000)
</script>
<template>
  <div>{{ title }}</div>
</template>
