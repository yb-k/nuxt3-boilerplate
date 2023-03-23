import { ModalActionType } from '../types/global';

declare module '#app' {
  interface NuxtApp {
    $alert(
      message: string | { title: string; message: string }
    ): Promise<'close'>;
    $confirm(
      message: string | { title: string; message: string }
    ): Promise<ModalActionType>;
  }
}

declare module '@vue/runtime-core' {}
declare module 'vue' {
  interface ComponentCustomProperties {
    $alert(
      message: string | { title: string; message: string }
    ): Promise<'close'>;
    $confirm(
      message: string | { title: string; message: string }
    ): Promise<ModalActionType>;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default defineNuxtPlugin(({ vueApp: app }) => {
  return {
    provide: {
      alert: $alert, // utils/$alert
      confirm: $confirm, // utils/$confirm
    },
  };
});
