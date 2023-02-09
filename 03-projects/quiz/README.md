1. Válaszd ki, melyik esemény módosító használható arra, hogy egy form elküldésénél ne töltődjön újra az oldal!
   - once
   - only-one
   - **prevent**
   - preventDefault

---

2.  Válaszd ki, a komponens melyik életciklusában érdemes az API hívásokat elindítani a kezdeti adatok elkéréshez!
    - unmounted
    - updated
    - beforeUpdate
    - **mounted**

---

3. Válaszd ki, mire szolgál a store!
   - Adatok átadására szülő -> gyermek között
   - Adatok átadására gyermek -> szülő között
   - **Közös adatok elérésére bármelyik komponensből**
   - Az alkalmazás felesleges túlbonyolítására

---

4. Válaszd ki, mire használhatjuk a _readonly()_ proxyt!
   - Kizárólag a _ref()_-el létrehozott változókat csak olvashatóvá tehetünk
   - Kizárólag a _reactive()_-el létrehozott változót csak olvashatóvá tehetünk
   - **Bármilyen objektumot csak olvashatóvá tehetünk**
   - Egyik válasz sem igaz

---

5. Válaszd ki, hogyan lehetséges egy _reactive()_ függvénnyel létrehozott változóhoz új értéket rendelni!
   - Ez sehogyan sem lehetséges, a _ref()_-et kell használni ilyen esetben a _reactive()_ helyett
   - Csak ki kell tenni az assignement (=) operátort, mint bármilyen változó esetében
   - **Az _Object.assign()_ metódussal megvalósítható**
   - Az _Object.create()_ metódussal megvalósítható

---

6. Válaszd ki, mire szolgál a router!
   - Külső oldalakra történő navigáció megvalósítására
   - **Az oldalon belüli navigáció megvalósítására**
   - Az oldalon belüli és a külső oldalakra történő navigáció megvalósítására
   - Csak az erőforrás állományokra (képek, betűtípusok) történő hivatkozások megvalósítására

---

7. Válaszd ki, melyik állítás igaz a nevesített útvonalakra!
   - Ilyen esetben elég az útvonal helyett a router fájlban a nevet megadni, így nem is szükséges az útvonal
   - **Nevesített útvonal esetében nem csak a _path_, hanem a _name_ is megadható a belső linkeknél**
   - Az nevesített útvonal azt adja meg, hogy melyik _router-view_-ba töltődjön be a View komponens
   - A nevesített útvonal csak speciális esetekben használható, ahol az útvonal egy külső fájlra mutat

---

8. Válaszd ki, mire szolgál a view!
   - **Egy "oldal" komponenseinek az összefogására szolgáló komponens**
   - A teljes alkalmazás komponenseinek az összefogására szolgáló komponens
   - Egy külső forrásból származó adat betöltésére szolgáló komponens
   - A fentiek közül egyik sem igaz

---

9. Válaszd ki, miért célszerű az egyes View-kat dinamikusan betölteni!
   - Csak így valósítható meg a routing, statikusan nem lehetséges a View-k betöltése
   - **Az alkalmazás elindulásakor így nem pazaroljuk az erőforrásokat**
   - Mert csak ilyen esetben lehet nevesített routingot használni
   - A fentiek közül egyik sem igaz

---

10. Válaszd ki a Vue.js-re vonatkozó helyes állítást!
    - Buildelés során egy webszerverre feltöltésre kerülnek a legenerált fájlok
    - A _preview_ script a megadott domain-en lévő kipublikált alkalmazást nyitja meg böngészőben
    - A build folyamat során a egy új, _dist_ mappába kerülnek az optimalizálatlan fájlok
    - **A _dev_ script futtatáskor nem kerülnek a lemezre kiírásra a fájlok**
