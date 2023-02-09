# Jegyzet

## Tartalom

- Az EditUserModal komponens elkészítése

## Lépések

- Hozzunk létre egy új komponenst `EditUserModal` névvel
- Itt fel fogjuk használni a bootstrap modal komponensét

```js
<template>
  <div
    id="editUserModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="editUserModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="editUserModalLabel" class="modal-title fs-5">Edit user</h5>
          <button
            ref="closeButton"
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body"></div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="handleSaveButtonClick"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
```

- A modal egy user objektumot fog kapni propként
- Ennek a felhasználónak kell az adatait egy formon belül megjeleníteni
- A modal save gombjára kattintva el kell mentenünk az adatokat, ekkor hívódik meg a `handleSaveButtonClick` függvény

```js
<script setup>
import { ref } from 'vue'
import { useUserStore } from '../../store/user'
import 'bootstrap/js/dist/modal'

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
})

const userFormData = ref(props.user)
const { modifyUser } = useUserStore()
const closeButton = ref()

async function handleSaveButtonClick() {
  try {
    await modifyUser(userFormData.value)
    closeButton.value.click()
  } catch (error) {
    alert(error.message)
  }
}
</script>
```

- A propként kapott userről készítek egy reaktív másolatot
- Ezt már bármikor módosíthatom
- HA a módosítás sikeres lesz akkor be kell zárni a modalt, így egy template ref-be elmentem a bezárás gombot, így manuálisan ki fogom tudni váltani a click eseményt
