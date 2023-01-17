import apiClient from '../utils/apiClient'

const urlFragment = 'users'

async function getUsers() {
  const response = await apiClient.get(urlFragment)
  return response.data
}

export default { getUsers }
