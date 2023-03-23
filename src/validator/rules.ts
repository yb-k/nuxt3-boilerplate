import { addMethod, string } from 'yup';

// declare custom rule
declare module 'yup' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface StringSchema<TType, TContext, TDefault, TFlags> {
    phone(): this;
  }
}

addMethod(string, 'phone', function phone() {
  const errorMessage = ({ label }: any) => {
    return label
      ? `${label}는 유효한 전화번호여야 합니다.`
      : '유효하지 않은 전화번호입니다.';
  };
  return this.test('test-phone-number', errorMessage, function (value) {
    const { path, createError } = this;
    const reg = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    return (
      (value && reg.test(value)) || createError({ path, message: errorMessage })
    );
  });
});
