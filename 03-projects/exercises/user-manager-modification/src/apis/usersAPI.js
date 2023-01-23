import apiClient from '../utils/apiClient'

const urlFragment = 'users'

async function createUser(user) {
  const result = await apiClient.post(urlFragment, user)
  return result.data
}

async function getUsers() {
  const result = await apiClient.get(urlFragment)
  return result.data
}

async function updateUser(id, updatedUser) {
  const result = await apiClient.put(`${urlFragment}/${id}`, updatedUser)
  return result.data
}

async function deleteUser(id) {
  await apiClient.delete(`${urlFragment}/${id}`)
}

export default {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
}
