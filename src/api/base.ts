import Axios from 'axios'
import { isDev } from '~/configs'

export const axios = Axios.create({
  baseURL: isDev ? '/api' : undefined,
})
