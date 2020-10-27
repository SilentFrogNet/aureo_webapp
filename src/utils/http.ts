import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import log from 'loglevel'
import Cookies from 'js-cookie'
import { ApiResponse } from '~overmindApp/types'

interface RequestConfig extends AxiosRequestConfig {
  emphasizeErrors?: boolean
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${document.location.protocol}//${document.location.host}`,    // 'http://localhost:8000',
})

const http = async <T>(config: RequestConfig): Promise<ApiResponse<T>> => {
  config.headers = {
    "X-CSRFToken": Cookies.get("csrftoken"),
    "Accept": "application/json",
    "Content-Type": "application/json",
  }
  const token = Cookies.get('auth_token')
  if (token !== undefined && token !== null)
    config.headers["Authorization"] = `Bearer ${token}`
  try {
    const response = (await axiosInstance.request<T>(config))
    const data = response.data
    if (process.env.NODE_ENV === 'development') {
      // toaster.show({ message: `OK: ${config.url}`, intent: Intent.SUCCESS })
      log.debug(`OK: ${config.url}`)
      log.debug(data)
    }
    return {
      status: response.status,
      body: data
    }
  } catch (error) {
    // popup error message
    // toaster.show({ message: error.message, intent: Intent.WARNING })
    if (process.env.NODE_ENV === 'development') {
      log.error(`${error.message}: ${config.url}`)
      log.error(error.response.data)
    }
    // throw error
    return {
      status: error.response.status,
      body: error.response.data
    }
  }
}

namespace Http {
  export const apiGET = async <T = any>(url: string) => await http<T>({ method: 'GET', url })
  export const apiPOST = async <T = any>(url: string, data: object) => await http<T>({ method: 'POST', url, data })
  export const apiPUT = async <T = any>(url: string, data: object) => await http<T>({ method: 'PUT', url, data })
  export const apiDELETE = async <T = any>(url: string) => await http<T>({ method: 'DELETE', url })
}
export = Http
