# Jegyzet

## Tartalom
- A usersAPI és a store módosítása felhasználó létrehozásához

## Lépések
- Új felhasználó létrehozásához módosítsuk a `usersAPI`-t:

```js
async function createUser(user) {
  const response = await apiClient.post(urlFragment, user)
  return response.data
}

export default { getUsers, deleteUser, updateUser, createUser }
```

- Majd a store-t:

```js
  async function addUser(user) {
    const response = await usersApi.createUser(user)
    users.value = [...users.value, response]
  }
```