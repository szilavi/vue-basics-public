<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <nav>
    <ul>
      <li>
        <a href="/">{{ title }}</a>
      </li>
      <li>
        <a href="https://training360.com">Training360</a>
      </li>
      <li>
        <a href="https://vuejs.org">Vue.js</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background: lightgray;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  display: inline-block;
}

a {
  color: black;
  display: inline-block;
  font-size: 1.15rem;
  padding: 1rem;
  text-decoration: none;
}
</style>
