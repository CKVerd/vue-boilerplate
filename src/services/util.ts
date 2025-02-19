import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
} from 'axios'

let axiosInstance: AxiosInstance

export const createAxiosInstance = (
  baseURL: string,
  headers?: Record<string, string>
) => {
  axiosInstance = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      ...headers, // Authorization or whatsoever
    },
  })
}

/**
 * https://stackoverflow.com/a/57338105/7482033
 */
export const http = {
  get: <T>(
    url: string,
    data?: Record<string, any>,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> => {
    const modifiedUrl = data
      ? `${url}?${new URLSearchParams(data).toString()}`
      : url
    return axiosInstance.get(modifiedUrl, config)
  },
  post: <T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> => axiosInstance.post(url, data, config),
  put: <T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> => axiosInstance.put(url, data, config),
  delete: <T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> => axiosInstance.delete(url, config),
}

/**
 * HTTP status code return messages
 * @param {number} status - HTTP status code
 * @returns {string} Message
 */

function _getStatusMessage(status: number) {
  let message = ''
  switch (status) {
    case 200:
      message = 'Success'
      break
    case 201:
      message = 'Data successfully created'
      break
    case 400:
      message = 'Bad Request'
      break
    case 401:
      message = 'Not Authenticated'
      break
    case 404:
      message = 'Not found'
      break
    case 503:
      message = 'Service unavailable. Try again later'
      break
    default:
      message = 'Error'
      break
  }
  return message
}

export class ResponseWrapper {
  status: number
  statusMessage: string
  message: string | null
  constructor(response: { status: number }, message: string) {
    this.status = response.status
    this.statusMessage = _getStatusMessage(this.status)
    this.message = message || null
  }
}
