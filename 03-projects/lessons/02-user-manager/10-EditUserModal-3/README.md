# Jegyzet

## Tartalom

- A felhasználó kiválasztása
- A modal megnyitása
- watch mint getter és setter

## Lépések

- Amikor rákattintok egy felhasználónál az edit gombra, akkor el kell menteni, hogy melyik felhasználóról is van szó, és ezt a felhasználót kell átadni az `EditUserModal` komponensnek
- Ehhez létrehozok egy reaktív változót `selectedUser` névvel, amely kezdetben legyen egy üres object
- Valamint kell egy függvény, amely a `selectedUser` értékét módosítja a paraméterként kapott értékre:

```js
const selectedUser = ref({})

function handleSelectUser(user) {
  selectedUser.value = user
}
```

- Ezt a függvényt fogom felhasználni a template-en belül
- Hogy a modal meg is nyíljon, használom a `data-bs-toggle`-t és a `data-bs-target`-et:

```js
  <button
    data-bs-toggle="modal"
    data-bs-target="#editUserModal"
    class="btn btn-primary me-2"
    @click="handleSelectUser(user)"
  >
    Edit
  </button>
```

- Valamint a table alatt az `EditUserModal`-t is megadom, amely propként megkapja a `selectedUser`-t:

```js
  <EditUserModal :user="selectedUser" />
```

- Mivel az `EditUserModal` megkapja a user-t, amely egy üres objektum, a prop validation-nel nem lesz baj
- A prop eredendően reaktív, azonban mi egy másolatot készítettünk róla, a másolat viszont nem fogja a prop módosulásait figyelni, ezért szükségünk van egy `watch`-ra az `EditUserModalon` belül:

```js
watch(
  () => props.user,
  (value) => (userFormData.value = value)
)
```

- Az első paraméter egy getter, a második a setter
- Így ha a prop változik, a `userFormData` is fog
