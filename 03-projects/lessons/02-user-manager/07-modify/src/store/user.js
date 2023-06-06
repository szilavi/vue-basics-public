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

  async function modifyUser(updatedUser) {
    const { id, ...userData } = updatedUser
    const response = await usersApi.updateUser(id, userData)
    users.value = users.value.map((user) => (user.id === id ? response : user))
  }

  return {
    users,
    fetchUsers,
    removeUser,
    modifyUser,
  }
}
