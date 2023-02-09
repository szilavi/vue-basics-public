# Feladatok

## 01 - form submit

- Készíts egy formot benne egy text típusú űrlap mezővel, melyben egy nevet kérünk be
- Legyen egy label elem is, valamint egy küldés gomb
- Amikor rákattintunk a küldésre, logolja az input értékét a konzolra
- Az űrlap elküldésekor ne legyen újra töltve az oldal, de az input tartalma legyen visszaállítva a kezdeti üres értékre

## 02 - style binding

- Adott webshop, mely hangszereket forgalmaz
- Néhány ezek közül, melyeknek az adatait megkapod:

```js
;[
  {
    id: 1,
    title: 'Ibanez S6570SK-STB Prestige',
    stock: 0,
  },
  {
    id: 2,
    title: 'Fender AM Ultra Luxe Strat MN PRB',
    stock: 2,
  },
  {
    id: 3,
    title: 'FGN Expert Odyssey SBB',
    stock: 11,
  },
  {
    id: 4,
    title: 'Gibson SG Standard Reissue Cherry VOS',
    stock: 1,
  },
  {
    id: 5,
    title: 'Jackson SL2A MAH Pro Soloist UWH',
    stock: 25,
  },
]
```

- Listázd ki a gitárokat
- Szerepeljen a DOM-ban a nevük, és az elérhető darabszám
- Amennyiben a darabszám 0, ugy pirossal jelenjen meg, amennyiben nagyobb, mint nulla, úgy zöld színnel
- Style bindingot használj

## 03 - style binding 2

- Hozz lére egy color picker inputot
- Valósítsd meg, hogy a color picker értéke változik, dinamikusan úgy változzon a teljes oldal háttérszíne
- Az oldal töltse ki a screent
- Tipp: Ne a body, vagy az #app háttérszínét módosítsd

## 04 - v-for and class binding

- Adott webshop, mely hangszereket forgalmaz
- Néhány ezek közül, melyeknek az adatait megkapod:

```js
;[
  {
    id: 1,
    title: 'Ibanez S6570SK-STB Prestige',
    stock: 0,
  },
  {
    id: 2,
    title: 'Fender AM Ultra Luxe Strat MN PRB',
    stock: 2,
  },
  {
    id: 3,
    title: 'FGN Expert Odyssey SBB',
    stock: 11,
  },
  {
    id: 4,
    title: 'Gibson SG Standard Reissue Cherry VOS',
    stock: 1,
  },
  {
    id: 5,
    title: 'Jackson SL2A MAH Pro Soloist UWH',
    stock: 25,
  },
]
```

- Listázd ki a gitárkat
- Szerepeljen a DOM-ban a nevük, és az elérhető darabszám
- Amennyiben a darabszám 0, ugy pirossal jelenjen meg, amennyiben nagyobb, mint nulla, úgy zöld színnel
- Class bindingot használj

## 05 - watch and computed

- Hozz létre egy formot
- Ezen belül hozz létre két _number_ típusú input mezőt
- Az egyik előtt egy `count` a másik előtt pedig `price` _label_ legyen
- A `count` esetében a
  - minimum: 0
  - maximum: 10
  - lépésköz: 1
  - alapértelmezett érték: 0
- A `price` esetében:
  - minimum: 0
  - maximum: 10000
  - lépésköz: 100
  - alapértelmezett érték: 0
- Legyen egy `fullPrice` változód is, aminek az értéke a `count` és a `price` szorzata
- Minden esetben, ha a `count` vagy a `price` változik a `fullPrice`nak is módosulnia kell
- A DOM-ba, egy form alatti divbe az alábbi formátumban kerüljön kiírásra a `fullPrice`: _**Full price: $11.000**_
- A kiírás csak akkor jelenjen meg, ha a `fullPrice` nem nulla
- Metódust ne használj a megvalósítás során, csak _watch_ és _computed_ függvényeket
