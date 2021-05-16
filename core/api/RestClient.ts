import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

// axios.defaults.headers.common.Accept = 'application/json'
axios.defaults.headers.common.Accept = '*/*'
axios.defaults.timeout = 12000
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

const getHttpHeaders = (isAuthenticated = false): AxiosRequestConfig => {
  // Add your custom logic here, for example add a Token to the Headers
  if (isAuthenticated) {
    return {
      headers: {
        Authorization: 'Bearer YOUR_TOKEN',
      },
    }
  }

  return {}
}

const API_URL = 'https://flank-sowecanjustbefriends.azurewebsites.net/api/'

const get = (path: string): Promise<AxiosResponse> => axios.get(API_URL + path, getHttpHeaders())

const del = (path: string): Promise<AxiosResponse> => axios.delete(API_URL + path, getHttpHeaders())

const post = (path: string, data: any): Promise<AxiosResponse> => axios.post(API_URL + path, data)

const put = (path: string, data: any): Promise<AxiosResponse> =>
  axios.post(API_URL + path, data, getHttpHeaders())

const patch = (path: string, data: any): Promise<AxiosResponse> =>
  axios.post(API_URL + path, data, getHttpHeaders())

export { get, del, post, put, patch }
