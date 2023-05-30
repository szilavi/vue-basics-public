# Jegyzet

## Tartalom

- Vue.js-projekt létrehozása, felépítése
- Komponensek

## Lépések

- Amennyiben egy Vue.js 3-as Vite-projektet szeretnénk létrehozni, adjuk ki a következő parancsot:

  - `npm init vue@3`

- A CLI-eszköz végigvezet minket a folyamaton:

  - **Project name**: adjuk meg a projekt nevét (pl.: _vue-components_), ez lesz a projekt mappájának neve is, amely automatikusan létrejön
  - **Add TypeScript?**: Használni akarunk-e TypeScriptet. (_No_)
  - **Add JSX Support?**: Használni akarjuk-e a React-féle JSX-et. (_No_)
  - **Add Vue Router for Single Page Application development?**: Az alkalmazás során szükség lesz-e az alkalmazáson belüli navigációra. (_Változó_, csak a webshopos alkalmazásnál lesz rá szükség)
  - **Add Pinia for state management?**: Használni akarjuk-e a Pinia State management eszközt. (_No_)
  - **Add Vitest for Unit Testing?**: Használni akarjuk-e a Vitest egységteszt eszközt. (_No_)
  - **Add Cypress for both Unit and End-to-End testing?**: Használni akarunk-e Cypress-t e2e-tesztek írására. (_No_)
  - **Add ESLint for code quality?**: Használni akarjuk-e az ESLint statikus kódellenőrző eszközt. (_Yes_)
  - **Add Prettier for code formatting?**: Használni akarunk-e Prettier-t kódformázásra. (_Yes_)

- Mindezek után adjuk ki a következő parancsot: `npm i`
- Ezzel települt az összes szükséges függőség
- Módosítsuk a `.prettierrc.json` fájlt:

```json
{
  "semi": false,
  "singleQuote": true,
  "htmlWhitespaceSensitivity": "ignore"
}
```

- Ezzel a következőket állítottuk be:

  - `"semi": false`: Ne kelljen az utasítások végén a pontosvesszőt kitenni
  - `"singleQuote": true`: Idézőjel helyett aposztrófot használunk
  - `"htmlWhitespaceSensitivity": "ignore"`: A tagek körüli whitespace karakterek figyelmen kívül hagyása

- Fejlesztés során SPA-akat (Single Page Application) fogunk írni
- Ahogyan a neve is utal rá, valójában egyetlen egy oldalunk lesz, amelynek egyes részeire dinamikusan töltjük be az éppen megjeleníteni kívánt tartalmakat
- Egy SPA fejlesztése során az alkalmazást kisebb részekre, úgynevezett komponensekre osztjuk fel
- Egy komponens minden összetartozó adata, mint a HTML template, a stílus és a JavaScript-rész egy fájlon belül fog elkészülni, eztért hívjuk SFC-nek (Single File Component)

- A létrejövő projekt az alábbi mappákat és fájlokat tartalmazza:

  - `.vsode` mappa : Az adott projekttel kapcsolatos VSCode-beállítások
  - `node_modules` mappa: A telepített NodeJS-csomagok
  - `public` mappa: Azokat a könyvtárakat, fájlokat helyezzük ide, amelyek nem kerülnek a build tool, azaz a Vite (ejtsd: vit, nekem ez nem mindig sikerül :)) által feldolgozásra, nem akarjuk ezeket optimalizálni, minify-olni, sem semmi egyéb
  - `src` mappa: A projekt feldolgozandó forrásállományai
    - `assets`: A projekthez szükséges egyéb erőforrás-állományok (CSS-fájlok, képek, betűtípusok stb.)
    - `component`: A Vue.js-komponensek könyvtára
    - `App.vue`: Az alkalmazás komponenseinek összefogására szolgáló fájl, maga az alkalmazás
    - `main.js`: Az alkalmazás létrehozására és a DOM-ba való betöltésére szolgáló kódot tartalmazza
  - `.eslintrc.cjs` : A ESLint statikus kódellenőrző eszköz konfigurációs állománya
  - `.gitignore`: Tartalmazza, hogy mely állományok legyenek a Git által figyelmen kívül hagyva
  - `.prettiertc.json`: A Prettier kódformázó eszköz konfigurációs állománya
  - `index.html`: Az a HTML template, amelybe az alkalmazás be fog töltődni
  - `package-lock.json`: Automatikusan jön létre, tartalmazza a teljes függőségi fát
  - `package.json`: A projekt alapinformációit és a függőségeket tartalmazza
  - `README.md`: A projekt leíró fájlja
  - `vite.config.js`: A Vite build eszköz konfigurációs állománya

- Indítsuk el az alkalmazást
- Ez megtehetjük (egyrészt) dev, azaz fejlesztői módban
- Adjuk ki a következő parancsot: `npm run dev`
- Ekkor a build eszköz, a Vite, előállítja a böngésző számára értelmezhető kódot a fájljainkból, azonban ezeket nem írja ki fájlba, csak a memóriában tartja
- Miután elindult a script, látható a terminálban valami hasonló:

```ps
VITE v3.2.5  ready in 471 ms
  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

- A `Vite 3.2.5-ös` verziója az alkalmazást 471 ms alatt indította el, a `http://localhost:5173/ `címen érhető el, és kiírja, hogy a `--host` paraméterrel megadható, hogy milyen IP-címet figyeljünk az alapértelmezett `localhost` helyett
- Nézzük meg az alkalmazást a böngészőben
- Bal oldalt van egy üdvözlő rész, jobb oldalt pedig egy listaszerű elem, benne egy ikonnal és szöveggel
- Vessünk pár pillantást a forráskódra
- Nézzük meg az `App.vue` állományt
- Látható néhány speciális tag: `HelloWorld`, `TheWelcome`, amelyeket komponenseknek nevezünk. Ezen fájlok kiterjesztése `.vue`
- Ezekből épül fel az alkalmazás

- Amennyiben az alkalmazás elkészült, és nem fejlesztés közben vagyunk, akkor le kell buildelni az alkalmazást, azaz el kell készíteni fájlszinten is a böngésző számára értelmezhető kódot
- Ehhez az `npm run build` parancsot kell kiadni
- Ekkor létrejön egy `dist` mappa a szükséges fájlokkal, amelyet a Vite állít elő
- A fájlok végén egy hash látható, amely egy egyedi kód a fájl jelenlegi verziójára
- Nyissuk meg egy új VSCode-ablakban ezt a `dist` mappát
- Kattintsunk az index.html állományra
- Indítsuk el az `Alt + L, ALt + O` gyorsbillentyűkkel a Live Server-t, hogy kiszolgálja az alkalmazást
- Ugyanazt kell látnunk, mint dev mód esetében

- Ilyen alkalmazásokat fogunk mi magunk is írni
