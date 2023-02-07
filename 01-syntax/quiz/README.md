1. Válaszd ki, melyik metódus csatolja fel a DOM-ba a Vue.js alkalmazást!
   - setup()
   - **mount()**
   - createApp()
   - Egyik sem

---

2. Válaszd ki, melyik **nem** egy Vue.js direktíva!
   - v-html
   - v-bind
   - v-for
   - **v-swich**

---

3. Válaszd ki az alábbi kódrészletek közül melyik helytelen szintaktikailag Vue.jsben!
   - <li v-for="framework in frameworks" :key="${framework.id}">
   - <li v-for="(framework, index) in frameworks" :key="`framework-${index}`">
   - <li v-for="{ id, name } in frameworks" :key="id">
   - **Mindegyik helyes**

---

4. Válaszd ki, hogy mi a különbség a v-if és a v-show direktíva között!
   - **A _v-show_ _display_ tulajdonságot állítja _none_-ra, míg a _v-if_ feltételhez kötötten rendereli le az elemet**
   - A _v-if_ a _display_ tulajdonságot állítja _none_-ra, míg a _v-show_ feltételhez kötötten rendereli le az elemet
   - A _v-show_ a _display_ tulajdonságot állítja _none_-ra, míg a v-if a *visibiliy*t állítja *hidden*re
   - Semmi

---

5. Válaszd ki, melyik a helyes szintaxis, amennyiben azt szeretnénk, hogy egy adott elemhez az out-of-stock osztály legen hozzárendelve, amennyiben nem elérhető!
   - :class="[ 'out-of-stock' : product.stock === 0 ]"
   - :class="[ product.stock === 0 : 'out-of-stock' ]"
   - :class="{ product.stock === 0 : 'out-of-stock' }"
   - **:class="{ 'out-of-stock' : product.stock === 0 }"**

---

6. Válaszd ki, melyik kódrészlet alkalmas arra, hogy az árat adóval megnövelt értékét adja vissza!
   - const priceWithTax = computed(() => price.value \* 1.27);
   - const priceWithTax = watch(price, () => price.value \* 1.27);

---

7. Válaszd ki, mit a legcélszerűbb használni, ha egy nettó árból, bruttó árat szeretnénk képezni, és megjeleníteni ezt a DOM-ban!
   - watchert
   - **computed property-t**
   - egy metódust kell írni
   - a templatben kell string intepolationt használni

---

8. Válaszd ki, melyik függvény segítségével tudunk reactive változót létrehozni!
   - ref()
   - reactive()
   - **ref() és reactive()**
   - ref() és setup()

---

9. Válaszd ki, melyik állítás **hamis** a ref()el létrehozott változókra?
   - primitív értéket és objektumot is lehet az érték
   - a template-en belül a .value-t keresztül érjük el az értéket
   - **nem lehet újra inicializálni**
   - a scripten belül a .value-t keresztül érjük el az értéket

---

10. Válaszd ki, melyik állítás **hamis** a reactive()al létrehozott változókra?
    - nem lehet újra inicializálni
    - a ref()el ellentétben sehol sem a .value keresztül érjük el az értéket
    - nem kötelező kezdőértékkel ellátni
    - **primitív értéket és objektumot is lehet az érték**
