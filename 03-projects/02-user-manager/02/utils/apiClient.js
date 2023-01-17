import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3001/',
  headers: {
    'Access-Control-Allow-Credential': true,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default apiClient
