# Jegyzet

## Tartalom

- A `userAPI` kiegészítése
- A store kiegészítése

## Lépések

- A törléshez hasonlóan most is először módosítom a usersAPI-t

```js
async function updateUser(id, updatedUser) {
  const response = await apiClient.put(`${urlFragment}/${id}`, updatedUser)
  return response.data
}

export default { getUsers, deleteUser, updateUser }
```

- Az `updateUser` kap egy id-t és az új, módosított felhasználói adatokat
- Majd módosítom a store-t

```js
async function modifyUser(updatedUser) {
  const { id, ...userData } = updatedUser
  const response = await usersApi.updateUser(id, userData)
  users.value = users.value.map((user) => (user.id === id ? response : user))
}
```

- Az API hívás után frissíti a `users` tömböt
