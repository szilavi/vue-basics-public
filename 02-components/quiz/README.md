1. Válaszd ki minek a rövidítése az SPA!
   - Server Page Application
   - **Single Page Application**
   - Server Page Architecture
   - Service Parameter Argumentum

---

2. Válaszd ki, melyik állítás igaz az App.vue állományra!

- Az alkalmazás létrehozásának és a DOM-ba való betöltésére szolgáló kódot tartalmazza.
- Az a html template, melybe az alkalmazás be fog töltődni.
- A build eszköz konfigurációs állománya.
- **Az alkalmazás komponenseinek összefogására szolgáló fájl, maga az alkalmazás.**

---

3. Válaszd ki milyen 3 fő részre lehet egy SFC-t osztani
   - script, tempalte, css
   - vue, tempalte, style
   - **script, template, style**
   - vue, html, css

---

4. Válaszd ki melyik állítás igaz az alkalmazás prod módban való futtatására!
   - Támogatja a Hot Module Replacementet
   - **Optimalizálja, minifyolja a fájlokat**
   - A fájlokat a mamóriában tartja, nem írja ki a diszkre
   - Egyik állítás sem igaz

---

5. Válaszd ki, mire használjuk a propsot!
   - Adatok átadásra a gyermekből a szülőnek
   - **Adatok átadásra a szülőből a gyermeknek**
   - Adatok átadásra szomszédos komponensek között
   - Egyik megoldás sem jó

---

6. Válaszd ki, hogyan lehetséges a props adatok elérése a scripten belül!
   - Sehogy sem lehetséges
   - Egyszerűen csak a prop nevét kell használni, ugyanúgy, mint a templatben
   - Előbb egy reactive változót kell készíteni belőle a ref() vagy a reactive() segítségéve, és csak ezután lehetséges a scriptben felhasználni
   - **Elég egy változóhoz hozzárendelni (pl.:props) és ezen keresztül már elérhetjük**

---

7. Válaszd ki, mire használjuk az eventset!
   - **Egyedi eseményekre való feliratkozás lehetőségét biztosítja a gyermekből a szülőnek**
   - Egyedi eseményekre való feliratkozás lehetőségét biztosítja a szülőből a gyermeknek
   - Egyedi eseményekre való feliratkozás lehetőségét biztosítja szomszédos komponensek között
   - Egyik megoldás sem jó

---

8. Válaszd ki az eventsekre vonatkozó **hamis** állítást!

- A defineEmits() függvényen belül sorolom fel, milyen egyedi eseményeket akarok használni
- Kaphat paramétert
- Egy komponensen a v-model az update:modelValue eseményt használja alapértelmezetten a frissítésnél
- **Egy komponens maximum egy egyedi eseményt bocsájthat ki**

---

1.  Válaszd ki, melyik nem egy Vue.js lifecycle hook!
    - unmounted
    - **destroyed**
    - beforeUpdate
    - mounted

---

10. Válaszd ki, melyik lifecycle hookon belül érdemes az API hívásokat elindítani!
    - unmounted
    - updated
    - beforeUpdate
    - **mounted**
