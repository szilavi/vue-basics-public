# Jegyzet

## Tartalom
- A `CreateUserForm` véglegesítése
  - középre igazítás
  - címsor hozzáadása
- Új felhasználó megjelenítése a táblázat tetején 

## Lépések
- A `CreateUserForm` komponensnél az árlapot helyezzük középre, ehhez egy div-en belülre tesszük, és a _div_-et formázzuk
- Készítsünk egy címsort is a _form_ elem elé:

```html
  <div class="d-flex flex-column align-items-center">
    <h2>Create new user</h2>
    <form
      v-show="isFormVisible"
      ref="createUserForm"
      @submit.prevent="handleFormSubmit"
    >
```

- Rejtsük el a _Create new user_ feliratú gombot akkor, ha az űrlap megjelenik:

```html
  <button
    v-show="!isFormVisible"
    class="btn btn-lg btn-primary mb-3"
    @click="showForm"
  >
    Create new user
  </button>

```
- Annyit még módosítsunk, hogy amikor egy új felhasználót létrehozunk, az ne a táblázat végén, hanem az elején jelenjen meg
- Ehhez a store-t kell módosítani:

```js
  async function addUser(user) {
    const response = await usersApi.createUser(user)
    users.value = [response, ...users.value]
  }
```

- Még a CSS fájl szintaktikai hibáit javítani kell, hogy helyesen jelenjenek meg a fókuszba került elemek:

```css
input:focus:invalid {
  box-shadow: 0 0 0 0.25rem rgba(255, 0, 0, 0.25);
}

input:focus:valid {
  box-shadow: 0 0 0 0.25rem rgba(0, 255, 0, 0.25);
}

``` 