export type ModalActionType = 'close' | 'cancel' | 'submit';

// TODO: 나중에 서버 공통 규격에 따라 처리
export interface ApiResponse<T> {
  code: number;
  message: string;
  result: T;
}
