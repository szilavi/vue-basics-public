# Jegyzet

## Tartalom

- bootstrap css importálása



## Lépések
- Importáljuk a main.js fájlba a bootstrap css fájlját:

```js
import 'bootstrap/dist/css/bootstrap.min.css'
```

- Az `App.vue` fájlon belül készítsünk egy alap template-et, amin belül ki tudjuk a felhasználókat
- Egyelőre a táblázat fejrészét hozom létre:

```js
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
  
  </table>
</template>
```

- Megírom a scriptet
- Importálom a `getUsers`-t a `usersAPI`-ból, és az `onMounted`en belül lekérdezem a felhasználókat, és beleteszem egy `users` nevű reaktív változóba
- **Megjegyzés:**: a `getUser`t itt neveztem át `getUsers`re 

```js
import { ref, onMounted } from 'vue'
import { getUsers } from '../apis/usersAPI.js'

const users = ref([])

onMounted(async () => {
  users.value = await getUsers()
})
```

- Elkészítem a `thead` alatt a `tbody`-t, hogy a DOM-ba bele tudjuk írni a felhasználókat:

```js
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
```
