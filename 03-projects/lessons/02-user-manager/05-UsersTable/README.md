# Jegyzet

## Tartalom

- A UsersTable komponsens

## Lépések

- Létrehozok egy új komponenst `UsersTable` névvel
- Itt fel fogom használni a storeból a `users`t
- Az `App`ból átmásolom a template-et

```js
<script setup>
import { useUserStore } from '../../store/user'

const { users } = useUserStore()
</script>

<template>
  <table class="table table-striped table-fixed">
    <thead>
      <tr>
        <th>Email Address</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>&nbsp;</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.emailAddress }}</td>
        <td>{{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
        <td>
          <button class="btn btn-primary me-2">Edit</button>
          <button class="btn btn-danger">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
```

- Az `App`on belül már csak a `fetchUsers`re van szükség, és a template helyett a `UsersTable` komponenst fogom használni, amit egy `container` osztályú div-be helyezek el

```js
<script setup>
import { onMounted } from 'vue'
import { useUserStore } from '../store/user'
import UsersTable from './components/UsersTable.vue'

const { fetchUsers } = useUserStore()

onMounted(async () => {
  try {
    await fetchUsers()
  } catch (error) {
    alert('Failed to fetch users')
  }
})
</script>

<template>
  <div class="container">
    <UsersTable />
  </div>
</template>
```
