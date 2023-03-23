import { promptModal } from 'jenesius-vue-modal';
import { ModalActionType } from '~/types/global';
import AppConfirm from '~/components/common/AppConfirm.vue';
export default (message: string): Promise<ModalActionType> => {
  return new Promise(async (resolve) => {
    await nextTick(); // 컨테이너가 늦게생성되는 케이스가 있기때문에 nextTick을 걸어준다.
    resolve(await promptModal(AppConfirm, { message }));
  });
};
