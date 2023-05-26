# Feladatok

# 01 - MainNavigation

- Adott a következő adatszerkezet:

```js
const menu = [
  {
    text: 'Vue.js',
    url: 'https://vuejs.org/',
  },
  {
    text: 'React',
    url: 'https://reactjs.org/',
  },
  {
    text: 'Angular',
    url: 'https://angular.io/',
  },
  {
    text: 'Svelte',
    url: 'https://svelte.dev/',
  },
]
```

- Készíts egy `MainNavigation` nevű, CSS-sel esztétikusan formázott komponenst, amely a tömbből létrehoz egy felső menüsávot
- A `text` property a megjelenítendő szöveg, az `url` a hivatkozás címét tartalmazza

# 02 - DataFilter

- Adott a következő adatszerkezet:

```js
const data = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
  { id: 3, name: 'Jim Smith' },
  { id: 4, name: 'Sarah Johnson' },
]
```

- Készíts egy Vue.js-komponenst `DataFilter` névvel
- A komponensen belül egy text típusú input mező legyen, valamint egy listában a `data`-ban szereplő nevek
- Amikor az input mezőbe szöveget írunk be, automatikusan szűrni fogja a neveket, és a listában csak a szűrt nevek fognak megjelenni
- A keresés nem case sensitive
- A szűréshez használj computed property-t
- Amikor a keresési feltétel, azaz az input tartalma módosul, mindig írd ki konzolra az új értéket (watch)

# 03 - UserForm

- Készíts egy Vue.js 3-komponenst `UserForm` névvel, amely egy űrlapot tartalmaz. Az űrlapon belül 3 elem van az alábbi névvel és megszorításokkal:

- `username` - kötelező adat, minimum 5 karakter hosszú
- `password` - kötelező adat, minimum 8 karakter hosszú, nem lehet ugyanaz, mint a `username`
- `confirmPassword` - kötelező adat, minimum 8 karakter hosszú, meg kell egyeznie a `password`-del

- Valamint egy Küldés gomb van még az űrlapon belül
- A küldésre kattintva történjen meg a validáció
- A mezőknél azt, hogy van-e hiba, egy-egy computed property-ben tárold
- Az üzenetek már a betöltődés után rögtön megjelenhetnek, nem kell megvárni a felhasználói interakciót
- Amennyiben hiba van, az adott űrlapelem alatt kell megjeleníteni egy bekezdésben a hibaüzenetet
- A hibaüzenetek a következők:
  - `username`: _Username must be at least 5 characters long and different from password_
  - `password`: _Password must be at least 8 characters long and different from username_
  - `confirmPassword`: _Confirm password must be at least 8 characters long and match with password_
- Ha nincs hiba, akkor ki kell írni egy alert ablakban az űrlapon megadott adatokat, ezután az űrlapelemek kezdőértékét vissza kell állítani
- A küldés után nem szabad, hogy az oldal újratöltődjön

# 04 - Posts

- Készíts egy Vue.js-alkalmazást, amely 3 komponenst tartalmaz:
  - `PostList`,
  - `PostTitle`,
  - `PostBody`
- A `PostList` az alábbi linken lévő posztokat egy-egy article tag-ben fogja megjeleníteni:  
   [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)
- A cikkek adataiból csak a _title_-re és a _body_-ra van szükség
- A _title_ értékét a `PostTitle` kapja meg propként, és helyezze el egy h3 tagen belül
- A _body_ értékét a `PostBody` kapja meg propként, és helyezze el egy p tagen belül
- A `PostList` használja fel a `PostTitle` és `PostBody` komponenseket

# 05 - SearchInput

- Készíts egy Vue.js-alkalmazást, amely 3 komponenst tartalmaz:
  - `PostList`,
  - `PostTitle`,
  - `PostBody`
- A `PostList` az alábbi linken lévő posztokat egy-egy article tag-ben fogja megjeleníteni:  
   [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)
- A cikkek adataiból csak a _title_-re és a _body_-ra van szükség
- A _title_ értékét a `PostTitle` kapja meg propként, és helyezze el egy h3 tagen belül
- A _body_ értékét a `PostBody` kapja meg propként, és helyezze el egy p tagen belül
- A `PostList` használja fel a `PostTitle` és `PostBody` komponenseket
- Készíts egy `SearchInput` komponenst
- A `SearchInput` egy darab szövegbeviteli mezőt tartalmaz
- A `SearchInput` a cikkek címében és tartalmában is keres
- Amikor a `SearchInput` értéke változik, erről értesüljön a `PostList`, és csak azok a posztok legyenek megjelenítve, amelyeknek vagy a címében, vagy a tartalmában szerepel a beírt szöveg
