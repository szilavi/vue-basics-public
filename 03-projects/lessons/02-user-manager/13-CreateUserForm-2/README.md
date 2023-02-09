# Jegyzet

## Tartalom

- Űrlapelemek formázása

## Lépések

- Formázzuk az input űrlapelemeket
- Amennyiben valid lesz, a keret legyen zöld, ha fókuszba kerül, akkor a `box-shadow` is legyen zöld
- Amennyiben invalid lesz, a keret legyen piros, ha fókuszba kerül, akkor a `box-shadow` is legyen piros
- Ehhez a `main.css` fájlt kell szerkeszteni
- Mivel a `main.css` már nem üres lesz, ezért a bootstrap css fájlját is ebbe importálom, nem a `main.js`-be

```css
@import 'bootstrap/dist/css/bootstrap.min.css';

input:invalid {
  border-color: red;
}

input:valid {
  border-color: green;
}

input:focus:invalid {
  box-shadow: 0 0 0 0.25rem rgba(255, 0, 0 0.25);
}

input:focus:valid {
  box-shadow: 0 0 0 0.25rem rgba(0, 255, 0 0.25);
}
```

- Így már csak ezt a fájlt kell a `main.js`-be importálni
- Valamint az `App`-ba a `CreateUserForm` komponenst is beimportálom, és elhelyezem a táblázat fölé:

```html
<template>
  <div class="container">
    <CreateUserForm />
    <UsersTable />
  </div>
</template>
```
