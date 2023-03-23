<template>
  <div>
    <label v-if="label" :for="attrFor">{{ label }}</label>
    <input
      v-bind="$attrs"
      :value="modelValue"
      @input="handleInput"
      @blur="$validate.validate()"
    />
    <slot v-bind="$validate"></slot>
  </div>
</template>
<script setup lang="ts">
import { useField } from 'vee-validate';

const attrs = useAttrs();
const props = defineProps<{
  label: string;
  modelValue: string | number;
  rule?: any;
  name: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void;
}>();

const handleInput = (e: Event) => {
  const newValue = (e.target as HTMLInputElement).value;
  if (attrs.type === 'number') {
    if (isNaN(parseInt(newValue))) {
      (e.target as HTMLInputElement).value = '0';
      return emit('update:modelValue', 0);
    } else {
      return emit('update:modelValue', parseInt(newValue));
    }
  }
  emit('update:modelValue', newValue);
};

const attrFor = computed<string>(() => {
  return `${attrs.id}` || '';
});

const $validate = useField(toRef(props, 'name'), toRef(props, 'rule'));

defineExpose({
  $validate,
});

onMounted(() => {
  // $validate.validate();
});
</script>
