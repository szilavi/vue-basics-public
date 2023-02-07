<script setup>
import { useCartStore } from '../../store/cart'

const { totalCount } = useCartStore()
</script>
<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <router-link class="nav__link" :to="{ name: 'guitarsList' }">
          Guitars
        </router-link>
      </li>
      <li class="nav__item">
        <router-link class="nav__link" :to="{ name: 'cart' }">
          Cart ({{ totalCount }})
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav {
  background: var(--dark);
}

.nav__list {
  margin: 0;
  padding: 1rem 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav__item {
  padding: 0 1rem;
}

.nav__link {
  text-decoration: none;
  font-size: 1.35rem;
  font-weight: 500;
}
</style>
