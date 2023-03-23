/* eslint-disable no-template-curly-in-string */
import { setLocale } from 'yup';

setLocale({
  mixed: {
    required: ({ label }) => {
      return label ? `${label}은 필수 입력입니다.` : '필수 입력입니다.';
    },
  },
  number: {
    min: '${min} 이상이어야 합니다.',
  },
  string: {
    min: '${min} 글자 이상이어야 합니다.',
    email: '유효하지 않은 이메일 형식입니다.',
  },
});
