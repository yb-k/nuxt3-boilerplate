<template>
  <transition name="fade" appear>
    <div class="custom-modal-container">
      <div class="modal">
        <div class="modal-content">
          <!-- <span class="modal-close">&times;</span> -->
          <p class="alert-text" v-html="message" />
          <div class="btn-wrap type-pop">
            <button
              type="button"
              class="btn-box btn-main"
              @click="onAction('close')"
            >
              확인
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script setup lang="ts">
import { Modal } from 'jenesius-vue-modal';
import { ModalActionType } from '~/types/global';

withDefaults(defineProps<{ message?: string }>(), {
  message: '',
});
const emit = defineEmits<{
  // @ts-ignore
  (e: Modal.EVENT_PROMPT, action: string): void;
}>();

const onAction = (action: ModalActionType) => {
  emit(Modal.EVENT_PROMPT, action);
};
</script>
