# Jegyzet

## Tartalom

- Az enter esemény kezelése az inputon belül

## Lépések

- A videók megjelennek a DOM-ban, azonban az elrendezés még nem szép
- Alakítsuk át a template-et
- Arra is szükség van, hogy amikor rákattintunk az egyik videóra, vagy amikor az Enter billentyűt nyomjuk meg amikor ki van választva, betöltődjön majd a bal oldalra:

```vue
<template>
  <div
    role="button"
    class="container p-1 video"
    @keyup.enter="event.target.click()"
  >
    <div class="row">
      <div class="col-6">
        <img
          class="img-fluid"
          :src="video.snippet.thumbnails.medium.url"
          :alt="video.snippet.title"
        />
      </div>
      <div class="col-6 p-0">
        <h3 class="h6">{{ video.snippet.title }}</h3>
      </div>
    </div>
  </div>
</template>
```
