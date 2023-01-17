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
