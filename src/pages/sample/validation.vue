<template>
  <div>
    <h1>Validation Samples</h1>
    <AppFieldValidation v-model="state.name" name="name" label="이름">
      <template #default="{ errorMessage: error }">{{ error }}</template>
    </AppFieldValidation>
    <AppFieldValidation v-model="state.email" name="email" label="이메일" />
    <AppFieldValidation
      v-model="state.age"
      type="number"
      name="age"
      label="나이"
    />
    <AppFieldValidation v-model="state.phone" name="phone" label="전화번호" />
    <div>
      {{ errorMessage }}
    </div>
    <button :disabled="!meta.valid">isValid</button>
    <button @click="formValidate">validate alert!</button>
  </div>
</template>
<script setup lang="ts">
import { useForm } from 'vee-validate';
import * as yup from 'yup';

const sheme = yup.object({
  name: yup.string().label('이름').required().min(3),
  email: yup.string().label('이메일').email().required(),
  age: yup.number().label('나이').required().min(15),
  phone: yup.string().required().phone(),
});

type State = yup.InferType<typeof sheme>;

const state = reactive<State>({
  name: '',
  email: '',
  age: 20,
  phone: '',
});

const { errors, meta, validate } = useForm({ validationSchema: sheme });

const errorMessage = computed<string | undefined>(() => {
  return Object.values(errors.value)[0];
});
const formValidate = async () => {
  const { valid, errors: validErrors } = await validate();
  if (valid) {
    $alert('통과');
  } else {
    const err = Object.values(validErrors)[0] || '';
    $alert(err);
  }
};
</script>
