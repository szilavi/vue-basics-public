import { ref } from 'vue'
import usersAPI from '../apis/usersAPI'

const users = ref([])

export function useUserStore() {
  async function fetchUsers() {
    try {
      users.value = await usersAPI.getUsers()
    } catch (error) {
      alert(error.message)
    }
  }

  async function addUser(user) {
    try {
      const response = await usersAPI.createUser(user)
      users.value = [response, ...users.value]
    } catch (error) {
      alert(error.message)
    }
  }

  async function modifyUser(updatedUser) {
    const { id, ...userData } = updatedUser
    try {
      const response = await usersAPI.updateUser(id, userData)
      users.value = users.value.map((user) =>
        user.id === id ? response : user
      )
    } catch (error) {
      alert(error.message)
    }
  }

  async function removeUser(id) {
    const isConfirmed = confirm('Are you sure you want to delete it?')
    try {
      if (isConfirmed) {
        await usersAPI.deleteUser(id)
        users.value = users.value.filter((user) => user.id !== id)
      }
    } catch (error) {
      alert(error.message)
    }
  }

  return {
    users,
    fetchUsers,
    addUser,
    modifyUser,
    removeUser,
  }
}
