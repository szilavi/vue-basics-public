# Jegyzet

## Tartalom

- Az `AppTitle` komponens elkészítése

## Lépések

- Az alkalmazás tetején egy formázott címsornak kell megjelennie
- Ehhez hozzunk létre egy `AppTitle` nevű komponenst:

```html
<template>
  <h1 class="bg-primary text-white py-3 mb-3 text-center">
    User manager application
  </h1>
</template>
```

- Használjuk fel az `App-vue-`n belül:

```html
<template>
  <AppTitle />
  <div class="container">
    <CreateUserForm />
    <UsersTable />
  </div>
</template>
```
