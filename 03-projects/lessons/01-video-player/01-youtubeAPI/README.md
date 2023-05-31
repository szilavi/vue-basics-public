# Jegyzet

## Tartalom

- Vue.js-projekt inicializálása
- YouTube API-kulcs generálása
- axios instance készítése
- YouTube-keresés indítása

## Lépések

- Az biztos, hogy szükségünk lesz arra, hogy a YouTube-on tudjunk videókat keresni 
- Ehhez pedig szükségünk van egy API-kulcsra, amelynek a segítségével mindez megvalósítható
- Látogassunk el a [console.cloud.google.com](console.cloud.google.com) oldalra
- Ha nem vagytok beregisztrálva, regisztráljatok, ha nem vagytok belépve, akkor lépjetek be
- Fent válasszátok ki a **Select Project** menüpontot
- Fent a **New Project**-re kattintva létre tudtok hozni egy új projektet, ez legyen _vuejs-basic-youtube_
- _Organization_ nem kell
- Kattintsunk a **Create**-re
- Hogyha ez megvan, akkor néhány másodperc múlva a _Notification bar_-ban megjelenik az, hogy a projekt elkészült
- Kattintsunk a **Select Project**-re
- Ezután a bal fölső sarokban kattintsunk a három kis vonalra, ez az _Application Menu_
- Válasszuk ki az **API and Services**-ből az **Enable APIs & Services**-t
- Itt egyetlenegy dolgot kell hozzáadnunk a projekthez, a _YouTube_-ot
- Kattintsunk az **Enable APIs & Services**-re, majd pedig kezdjük el begépelni, hogy YouTube
- A **YouTube Data 3 API** fog kelleni
- Válasszuk ki, majd kattintsunk az **Enable** gombra

- Néhány másodperc, és engedélyezni fogja ezt a szolgáltatást, hogy használjuk a _YouTube Data API_-nak a hármas verzióját
- Már csak egyetlenegy dologra van szükségünk, egy jogosultság hozzáadására, kattintsunk oldalt a **Credencials**-re
- Kattintsunk a **Create Credencials**-re, és válasszuk ki az **API key**-t. Le fog nekünk generálni egy API-kulcsot, amelynek a segítségével lekérdezéseket tudunk a Google felé küldeni
- Ezt a kulcsot a vágólapra másoljuk rá
- A VSCode-ban hozzunk létre egy új mappát az _src_-n belül, a mappának a neve legyen _api_
- Ezen belül létrehozok egy fájlt: _youtube.api.js_
- Egy változóba elmentem a vágólapra helyezett API-kulcsot. A változó neve legyen _key_
- Ha a YouTube API működésére vagyunk kíváncsiak, akkor a [developers.google.com](developers.google.com) oldalon ezt meg tudjuk nézni
- A **Products**-ból válasszátok ki a **YouTube**-ot
- Itt az **Add YouTube Data** alatt a **Reference**-t
- A **Search** **list**-re, azaz a keresett videók listájára van szükségem
- Egyetlenegy dolgot használni fogok még a projekthez, ez pedig nem más, mint az _axios_, amely egy HTTP-kliens
- Az _axios_ egyebek között abban is a segítségünkre van, hogyha egy kérésre válasz érkezik, ne kelljen mindig meghívni a `json() ` metódust még külön, és átalakítani a kapott adatokat: az _axios_ ezt automatikusan meg fogja csinálni
- Létrehozok egy objektumot `defaultParams` névvel. Ez az objektum fogja tartalmazni azokat a paramétereket, amelyeket én itt a kérés során szeretnék elküldeni a szervernek:

```js
export const defaultParams = {
  part: 'snippet',
  maxResults: 12,
  key,
}
```

- Ezután az *axios*-ból egy instance-t, egy példányt fogok létrehozni a következőféleképpen:

```js
export const youtubeAPI = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
})
```

- Ha kérést akarunk küldeni, akkor a `baseUrl`-re kell a kérést küldenünk
- Az axios valójában annyit csinál, hogy a _fetch API_-ra épülve egy nagyon szép és teljes HTTP-klienst biztosít számunkra. Az axios `get`, `post`, `put`, `delete` stb. metódusokat biztosít, amelyek elérhetőek, hasonlóan, mint a fetch esetében, csak nem options-ként fogom megadni, hanem mint method fogom őket elérni
- Nézzünk meg, hogy egyáltalán tudunk-e kéréseket indítani a YouTube felé
- Az _App.vue_-ba importálni fogom a `YoutubeAPI`-t, és fel is fogom használni az `onMounted` hookban:

```js
<script setup>
import { onMounted } from 'vue'
import { youtubeAPI, defaultParams } from './apis/youtubeAPI.js'

onMounted(async () => {
  const response = await youtubeAPI.get('/search', {
    params: {
      ...defaultParams,
      q: 'vuejs',
    },
  })
  console.log(response.data)
})
</script>
```

- Egy get kérést indítok, az alapértelmezett URL-hez a `search` lesz hozzáfűzve
- Az options object egy params objektumot kap paraméterként
- Itt az alapértelmezett paramétereket adom meg, amelyeket szintén importáltam, valamint a `q` paramétert, amely a keresőszót tartalmazza
- Kiíratom konzolra a választ, amelyet a `data`-n keresztül érek el
