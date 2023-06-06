# Jegyzet

## Tartalom

- A `userAPI` kiegészítése
- A store kiegészítése
- Törlés megvalósítása a komponensen belül

## Lépések

- A törléshez a `userAPI`-t egészítsük ki:

```js
async function deleteUser(id) {
  await apiClient.delete(`${urlFragment}/${id}`)
}

export default { getUsers, deleteUser }
```

- Így az adott `id`-jű usert ki fogunk tudni törölni
- Használjuk fel ezt a függvényt a store-on belül
- Importáljuk, majd hozzuk létre a `removeUser` függvényt, amelyet ne felejtsünk el megadni a returnnél is:

```js
async function removeUser(id) {
  await usersApi.deleteUser(id)
  users.value = users.value.filter((user) => user.id !== id)
}
```

- Ez a függvény meghívja az API-t, majd a `users` reaktív tömbből is törli a felhasználót
- A `UsersTable` törlés gombjára kattintva kell meghívni ez a függvényt
- Módosítsuk a template-et:

```js
  <button class="btn btn-danger" @click="handleDeleteClick(user.id)">
    Delete
  </button>
```

- A `handleDeleteClick` megkapja majd az adott user `id`-jét
- Írjuk meg a függvényt, a `removeUser`-re is szükség lesz a store-ból
- Törlés előtt kérjünk megerősítést a felhasználótól:

```js
const { users, removeUser } = useUserStore()

async function handleDeleteClick(id) {
  try {
    const confirmDelete = confirm('Are you sure?')
    if (confirmDelete) {
      await removeUser(id)
    }
  } catch (error) {
    alert('Can not remove user')
  }
}
```

- A delete gombra kattintva most már törölni tudjuk a felhasználót
