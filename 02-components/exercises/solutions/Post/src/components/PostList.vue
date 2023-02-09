<script setup>
import { ref, onMounted } from 'vue'
import PostTitle from './PostTitle.vue'
import PostDescription from './PostBody.vue'

const posts = ref()

onMounted(async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  posts.value = await response.json()
})
</script>

<template>
  <div class="container">
    <article v-for="post in posts" :key="post.id">
      <PostTitle :title="post.title" />
      <PostDescription :body="post.body" />
    </article>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
}

article {
  margin: 0 0 1rem 0;
  padding: 1rem;
  box-shadow: 0 3px 6px rgba(100, 100, 100, 0.25);
}
</style>
