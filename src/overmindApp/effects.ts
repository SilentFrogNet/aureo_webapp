import { apiGET, apiPOST, apiPUT, apiDELETE } from '~utils/http'
import {
  ApiResponse,
} from './types'

export const api = {
  // git_info: {
  //   async get(): Promise<GitInfoResponse> {
  //     const response = await apiGET<GitInfoResponse>(`${base_pcbdebug_url}/git_info`)
  //     if (response.status >= 300) {
  //       toaster.show({ message: `${response.status}: ${response.body.error}`, intent: Intent.DANGER })
  //       return null
  //     }
  //     const data = response.body
  //     checkSchema(GitInfoResponse, data)
  //     return data
  //   }
  // },
  // auth: {
  //   async register(payload: RegisterData): Promise<ApiResponse<AuthResponse>> {
  //     const response = await apiPOST<AuthResponse>(`${base_auth_url}/register`, payload)
  //     if (response.status >= 300) {
  //       toaster.show({ message: `${response.status}: ${response.body.error}`, intent: Intent.DANGER })
  //       return null
  //     }
  //     // const data = response.body
  //     // checkSchema(RegisterData, data)
  //     return response
  //   },
  //   async login(payload: LoginData): Promise<ApiResponse<AuthResponse>> {
  //     const response = await apiPOST<AuthResponse>(`${base_auth_url}/login`, payload)
  //     if (response.status >= 300) {
  //       toaster.show({ message: `${response.status}: ${response.body.error}`, intent: Intent.DANGER })
  //       return null
  //     }
  //     // const data = response.body
  //     // checkSchema(LoginData, data)
  //     return response
  //   },
  //   async token_login(token: string): Promise<ApiResponse<AuthResponse>> {
  //     const response = await apiPOST<AuthResponse>(`${base_auth_url}/token_login`, {token: token})
  //     if (response.status == 404) {
  //       return null
  //     }
  //     else if (response.status >= 300) {
  //       toaster.show({ message: `${response.status}: ${response.body.error}`, intent: Intent.DANGER })
  //       return null
  //     }
  //     // const data = response.body
  //     // checkSchema(LoginData, data)
  //     return response
  //   },
  //   async logout(): Promise<ApiResponse<AuthResponse>> {
  //     const response = await apiPOST<AuthResponse>(`${base_auth_url}/logout`, {})
  //     if (response.status >= 300) {
  //       toaster.show({ message: `${response.status}: ${response.body.error}`, intent: Intent.DANGER })
  //       return null
  //     }
  //     // const data = response.body
  //     // checkSchema(LoginData, data)
  //     return response
  //   }
  // },
}
