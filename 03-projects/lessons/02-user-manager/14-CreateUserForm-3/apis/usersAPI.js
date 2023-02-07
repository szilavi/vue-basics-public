import apiClient from '../utils/apiClient'

const urlFragment = 'users'

async function getUsers() {
  const response = await apiClient.get(urlFragment)
  return response.data
}

async function deleteUser(id) {
  await apiClient.delete(`${urlFragment}/${id}`)
}

async function updateUser(id, updatedUser) {
  const response = await apiClient.put(`${urlFragment}/${id}`, updatedUser)
  return response.data
}

async function createUser(user) {
  const response = await apiClient.post(urlFragment, user)
  return response.data
}

export default { getUsers, deleteUser, updateUser, createUser }
