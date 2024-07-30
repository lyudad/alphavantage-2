import axios from 'axios'
import { BASE_URL } from '@src/constants/api'

// let store: Store<RootState>

const apiInstance = axios.create({
  baseURL: BASE_URL,
  responseType: 'json',
})

apiInstance.interceptors.response.use(
  async (response) => {
    return response
  },
  async (error) => {
    try {
      return Promise.reject(error)
    } catch (e) {
      console.log('Error in interceptors.response', e)
    }
  },
)

export default apiInstance