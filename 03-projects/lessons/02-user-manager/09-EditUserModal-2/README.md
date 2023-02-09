# Jegyzet

## Tartalom

- A módosító űrlap elkészítése

## Lépések

- Elkészítem a modal bodyn belül az űrlapot
- Minden label-input párost egy külön div-be helyezek el így csoportosítva őket

```html
<form action="">
  <div class="mb-3">
    <label for="emailAddress">Email address</label>
    <input
      id="emailAddress"
      v-model="userFormData.emailAddress"
      type="email"
      class="form-control"
    />
  </div>
  <div class="mb-3">
    <label for="firstName">First name</label>
    <input
      id="firstName"
      v-model="userFormData.firstName"
      type="text"
      class="form-control"
    />
  </div>
  <div class="mb-3">
    <label for="lastName">Last name</label>
    <input
      id="lastName"
      v-model="userFormData.lastName"
      type="text"
      class="form-control"
    />
  </div>
</form>
```
