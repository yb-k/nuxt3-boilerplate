import { AxiosRequestConfig } from 'axios';
import { ApiResponse } from '~/types/global';

export default class BaseService {
  readonly prefix: string = '/';
  resource: string;

  constructor(resource: string) {
    this.resource = `${this.prefix}${resource}`;
  }

  get<T>(url: string, config?: AxiosRequestConfig) {
    return $api.get<ApiResponse<T>>(`${this.resource}${url}`, config);
  }

  post<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    return $api.post<ApiResponse<T>>(`${this.resource}${url}`, data, config);
  }

  put<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    return $api.put<ApiResponse<T>>(`${this.resource}${url}`, data, config);
  }

  delete<T>(url: string, config?: AxiosRequestConfig) {
    return $api.delete<ApiResponse<T>>(`${this.resource}${url}`, config);
  }
}
