import { sampleService } from './';

interface State {
  poo: string;
}

export const useSampleStore = defineStore(
  /* TODO: must be unique */ 'samples',
  {
    state: (): State => ({
      poo: 'default',
    }),
    actions: {
      // TODO: not any type!! just sample
      async getSampleList(params: any) {
        await sampleService.getSampleList(params);
      },
    },
    getters: {},
  }
);
