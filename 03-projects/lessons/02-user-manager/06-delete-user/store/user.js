import { ref } from 'vue'
import usersApi from '../apis/usersAPI'

const users = ref([])

export function useUserStore() {
  async function fetchUsers() {
    users.value = await usersApi.getUsers()
  }

  async function removeUser(id) {
    await usersApi.deleteUser(id)
    users.value = users.value.filter((user) => user.id !== id)
  }

  return {
    users,
    fetchUsers,
    removeUser,
  }
}
