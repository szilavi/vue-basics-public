<script setup>
const menu = [
  {
    text: 'Vue.js',
    url: 'https://vuejs.org/',
  },
  {
    text: 'React',
    url: 'https://reactjs.org/',
  },
  {
    text: 'Angular',
    url: 'https://angular.io/',
  },
  {
    text: 'Svelte',
    url: 'https://svelte.dev/',
  },
]
</script>

<template>
  <nav>
    <ul>
      <li v-for="item in menu" :key="item.text">
        <a :href="item.url">{{ item.text }}</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  padding: 1rem;
  background: lightgray;
}

nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav li {
  margin: 0 0 0 1rem;
}

nav a {
  color: black;
  text-decoration: none;
}
</style>
