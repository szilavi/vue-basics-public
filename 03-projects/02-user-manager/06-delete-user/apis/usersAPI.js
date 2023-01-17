import apiClient from '../utils/apiClient'

const urlFragment = 'users'

async function getUsers() {
  const response = await apiClient.get(urlFragment)
  return response.data
}

async function deleteUser(id) {
  await apiClient.delete(`${urlFragment}/${id}`)
}

export default { getUsers, deleteUser }
