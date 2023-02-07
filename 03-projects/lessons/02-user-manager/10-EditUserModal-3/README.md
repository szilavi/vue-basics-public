# Jegyzet

## Tartalom
- A felhasználó kiválasztása
- A modal megnyitása
- watch, mint getter és setter

## Lépések
- Amikor rákattintok egy felhasználónál az edit gombra, akkor el kell menteni, melyik felhasználóról is van szó, és ezt a felhasználót kell átadni az `EditUserModal` komponensnek
- Ehhez létrehozok egye reaktív változót `selectedUser` névvel, ami kezdetben egy üres object legyen
- Valamint kell egy függvény, ami a `selectedUser` értékét módosítja a paraméterként kapott értékre

```js
const selectedUser = ref({})

function handleSelectUser(user) {
  selectedUser.value = user
}
```

- Ezt a függvényt fogom felhasználni a templaten belül
- Hogy a modal meg is nyíljon a `data-bs-toggle` és a `data-bs-target`-et

```vue
  <button
    data-bs-toggle="modal"
    data-bs-target="#editUserModal"
    class="btn btn-primary me-2"
    @click="handleSelectUser(user)"
  >
    Edit
  </button>
```
- Valamint a table alatt az `EditUserModal`-t is megadom, ami propként megkapja a `selectedUser`t

```vue
  <EditUserModal :user="selectedUser" />
```

- Mivel az `EditUserModal` megkapja a usert, ami egy üres objektum, ezért a prop validationnel nem lesz baj
- A prop eredendően reaktív, azonban mi egy másolatot készítettünk róla, a másolat viszont nem fogja a prop módosulásait figyelni, ezért szükségünk van egy `watch`-ra az `EditUserModalon` belül

```js
watch(
  () => props.user,
  (value) => (userFormData.value = value)
)
```
- Az első paraméter egy getter a második a setter
- Így ha a prop változik, a `userFormData` is fog