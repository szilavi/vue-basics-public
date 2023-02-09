<script setup>
import { ref, onMounted } from 'vue'
import PostTitle from './PostTitle.vue'
import PostBody from './PostBody.vue'
import SearchInput from './SearchInput.vue'

const posts = ref()
const filteredPosts = ref()

function filterPosts(query) {
  filteredPosts.value = posts.value.filter(
    (post) => post.title.includes(query) || post.body.includes(query)
  )
}

onMounted(async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  posts.value = await response.json()
  filteredPosts.value = posts.value
})
</script>

<template>
  <div class="container">
    <SearchInput @search-articles="filterPosts" />
    <article v-for="post in filteredPosts" :key="post.id">
      <PostTitle :title="post.title" />
      <PostBody :body="post.body" />
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
  margin: 1rem 0;
  border: 1px solid lightgrey;
}
</style>
