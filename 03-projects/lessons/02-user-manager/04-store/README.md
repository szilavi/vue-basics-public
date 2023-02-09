# Jegyzet

## Tartalom

- A store létrehozása
- composables

## Lépések

- Létrehozok egy mappát `store` néven
- **Megjegyzés**: Én az `src` mellett hoztam, de érdemes az `src`-n belül létrehozni
- Ezen belül létrehozok egy `user.js` fájlt
- Itt fogom tárolni a felhasználókat, és azokat a függvényeket, amelyek a felhasználókkal fognak dolgozni

```js
import { ref } from 'vue'
import usersApi from '../apis/usersAPI'

const users = ref([])

export function useUserStore() {
  async function fetchUsers() {
    users.value = await usersApi.getUsers()
  }

  return {
    users,
    fetchUsers,
  }
}
```

- A `fetchUsers` nem csinál mást, mint lekéri a felhasználókat
- A `useUserStore` composable bármikor felhasználható bármelyik komponensünkben
- _composable_: olyan függvény, mely a vue reaktivitását használja fel állapotmentes logika újra felhasználhatósága céljából
- Az `App.vue`-t módosítanom kell, hogy a store.t használja:

```js
<script setup>
import { onMounted } from 'vue'
import { useUserStore } from '../store/user'

const { users, fetchUsers } = useUserStore()

onMounted(async () => {
  try {
    await fetchUsers()
  } catch (error) {
    alert('Failed to fetch users')
  }
})
</script>
```

- Kivételkezelést is használok, és hiba estén egy alert ablakban megjelenítem a hibát
