# Jegyzet

## Tartalom

- VSCode pluginok telepítése
- VSCode beállításainak módosítása

## Lépések

- Telepítsük fel az alábbi VSCode pluginokat:

  - Auto Complete Tag
  - Auto Import
  - Live Server
  - ESLint
  - Prettier - Code formatter
  - JavaScript (ES6) code snippets
  - Vue Language Features (Volar)

- Nyissuk meg a VSCode felhasználói beállításainak JSON fájlját

  - F1 (vagy Fn + F1 gyorsbillentyű)
  - Kezdjük el beírni : _Preferencies Open User settings (JSON)_
  - A JSON fájl tartalma nálam a következő:

  ```json
  {
    "editor.formatOnSave": true,
    "editor.formatOnPaste": true,
    "editor.formatOnType": true,
    "editor.codeActionsOnSave": {
      "source.fixAll": true
    },
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.tabSize": 2,
    "files.autoSave": "afterDelay",
    "files.eol": "\n",
    "eslint.alwaysShowStatus": true,
    "eslint.format.enable": true,
    "eslint.validate": [
      "javascript",
      "javascriptreact",
      "vue",
      "typescript",
      "typescriptreact"
    ]
  }
  ```

- Nyissuk meg a VSCode-ot, majd a Beállításokat
  - A Prettier Semi opció ne legyen bepipálva
  - A Prettier Single Quote legyen bepipálva
- Ezután telepítsük a Chrome (vagy valamilyen Chromium alapú böngésző alá):
  [Vue.js devtool](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)t
