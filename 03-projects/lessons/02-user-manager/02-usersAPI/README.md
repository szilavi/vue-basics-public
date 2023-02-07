# Jegyzet

## Tartalom

- axios példány létrehozása
- usersAPI elkészítése

## Lépések
- Létrehozok egy `utils` mappát 
- **Megjegyzés**: Én az `src` mellett hoztam, de érdemes az `src`-n belül létrehozni
- Ezen belül létrehozok egy `apiClient.js` fájlt 
- HA nem telepítettük még, akkor telepítsük az `axios` csomagot: `npm i axios`
- Ebben létrehozom az `axios` példányt:


```js
import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3001/',
  headers: {
    'Access-Control-Allow-Credential': true,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default apiClient
```

- A `baseURL` nem lesz más mint a `json-server` url-je
- Létrehozok egy új mappát `apis` névvel
- - **Megjegyzés**: Én az `src` mellett hoztam, de érdemes az `src`-n belül létrehozni
- Létrehozok benne egy fájlt `usersAPI.js` névvel
- Itt fogom felhasználni a létrehozott API klienst

```js
import apiClient from '../utils/apiClient'

const urlFragment = 'users'

export async function getUser() {
  const response = await apiClient.get(urlFragment)
  return response.data
}
```

- Az `urlFragment` változóba lementem a szerveren lévő útvonalat
- Ez `users` lesz, hiszen itt érem el a felhasználókat
- Egy függvényt hoztam létre a `getUser`t, ami lekéri a felhasználók adatait
- `Megjegyzés`: a getUsers jobb elnevezés 
- `axios` használatánál a válasz törzse mindig a `data`-n keresztül érhető el