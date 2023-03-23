import { SampleListOptions, SamplesData } from './type';
import AppService from '~/service/app';

class SampleService extends AppService {
  constructor() {
    super('/admin/user');
  }

  getSampleList(params: SampleListOptions) {
    return this.get<SamplesData>('/list', { params });
  }
}

export const sampleService = new SampleService();
