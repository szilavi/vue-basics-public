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

3. Válaszd ki az alábbi kódrészletek közül melyik helytelen szintaktikailag Vue.js-ben!
   - <li v-for="framework in frameworks" :key="${framework.id}">
   - <li v-for="(framework, index) in frameworks" :key="`framework-${index}`">
   - <li v-for="{ id, name } in frameworks" :key="id">
   - **Mindegyik helyes**

---

4. Válaszd ki, hogy mi a különbség a _v-if_ és a _v-show_ direktíva között!
   - **A _v-show_ _display_ tulajdonságot állítja _none_-ra, míg a _v-if_ feltételhez kötötten rendereli le az elemet**
   - A _v-if_ a _display_ tulajdonságot állítja _none_-ra, míg a _v-show_ feltételhez kötötten rendereli le az elemet
   - A _v-show_ a _display_ tulajdonságot állítja _none_-ra, míg a _v-if_ a *visibiliy*t állítja *hidden*re
   - Semmi

---

5. Válaszd ki, melyik a helyes szintaxis, amennyiben azt szeretnénk, hogy egy adott elemhez az out-of-stock osztály legen hozzárendelve, amennyiben nem elérhető!
   - :class="[ 'out-of-stock' : product.stock === 0 ]"
   - :class="[ product.stock === 0 : 'out-of-stock' ]"
   - :class="{ product.stock === 0 : 'out-of-stock' }"
   - **:class="{ 'out-of-stock' : product.stock === 0 }"**

---

6. Válaszd ki, melyik kódrészlet alkalmas arra, hogy az ár adóval megnövelt értékét adja vissza, és a változásokat is nyomon kövesse!
   - **const priceWithTax = computed(() => price.value \* 1.27)**
   - const priceWithTax = watch(price, () => price.value \* 1.27)
   - const priceWithTax = ref(price.value)
   - const priceWithTax = reactive(price.value)

---

7. Válaszd ki, mit a legcélszerűbb használni, ha egy nettó árból, bruttó árat szeretnénk képezni, és megjeleníteni ezt a DOM-ban!
   - watchert
   - **computed property-t**
   - egy metódust kell írni
   - a template-ben kell string interpolationt használni

---

8. Válaszd ki, melyik függvény segítségével tudunk reaktív változót létrehozni!
   - ref()
   - reactive()
   - **ref() és reactive()**
   - ref() és setup()

---

9. Válaszd ki, melyik állítás **hamis** a _ref()_-el létrehozott változókra?
   - primitív értéket és objektumot is lehet az érték
   - a template-en belül a _.value_-t keresztül érjük el az értéket
   - **nem lehet újra inicializálni**
   - a scripten belül a _.value_-t keresztül érjük el az értéket

---

10. Válaszd ki, melyik állítás **hamis** a _reactive()_-al létrehozott változókra?
    - nem lehet újra inicializálni
    - a _ref()_-el ellentétben sehol sem a _.value_ keresztül érjük el az értéket
    - nem kötelező kezdőértékkel ellátni
    - **primitív értéket és objektumot is lehet az érték**
