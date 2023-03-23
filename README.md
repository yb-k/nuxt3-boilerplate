# Nuxt 3 Basic Starter

### recommend

- IDE : VSCode
- Extensions..
  - Volar
  - Typescript Vue Plugin
  - ESlint
  - Prettier
  - MDX (Storybook)
- node ^16
- yarn

### Packages

- Nuxt3
  - Vite
  - Typescript
- Pinia
- Eslint
- Prettier
- VeeValidate
- Yup
- axios
- jenesius-vue-modal

### Reference

> [Nuxt 3 Doucment](https://nuxt.com/docs/getting-started/introduction)
>
> [Vite Build Options](https://vitejs.dev/config/build-options.html)
>
> [Nitro Server](https://nitro.unjs.io/config)
>
> [Typescript Document](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)
>
> [Vue 3 Document](https://vuejs.org/guide/introduction.html)
>
> [jenesius-vue-modal](https://modal.jenesius.com/)
>
> [VeeValidate (유효성검사)](https://vee-validate.logaretm.com/v4/guide/overview/)
>
> [Yup (유효성검사)](https://github.com/jquense/yup)
>
> [Sass Doucmentation](https://sass-lang.com/documentation/)

## Setup

Make sure to install the dependencies:

```bash
## 한번만 복사 후 각각 값 세팅 팅요
cp .env.example .env.local

# yarn
yarn install

```

## Development Server

Start the development server on http://localhost:3000

```bash
# local dev
yarn dev

```

## Production

Build the application for production:

```bash
yarn build
```

Locally preview production build:

```bash
yarn preview
```

### 스토리북

#### Reference

> [storybook 6.5 Vue Docs](https://storybook.js.org/docs/vue/get-started/why-storybook)

#### 커맨드

```bash
# 6006 port start
yarn storybook


# static page generation
yarn generate:storybook
```

## folder structuer

### 폴더 구조

아래의 목록은 `src` 하위의 폴더입니다.

`auto-import`가 적용된 폴더들은 따로 `import` 하지 않아도 전역적으로 사용할 수 있습니다.

- assets : 번들에 포함할 정적 리소스 (sass,css,font,js,css,imgs 등)
- components : 컴포넌트 모음 폴더입니다. API의 영향을 받지않는 컴포넌트들을 하위에 작성합니다.
  - common(auto-import) : 전역적으로 사용할 컴포넌트 폴더입니다.
- composables(auto-import): Custom composition을 작성합니다.
  파일명 예시) useMouse.ts -> 하나의 composition만 export
- directives : 커스텀 디렉티브를 작성합니다. (거의 쓸일 X)
- middleware : Router 미들웨어입니다. 전역적 핸들링은 `파일명.global.ts` global 을 넣으면 됩니다.
- modules : api server controller 기준으로 API에 영향을 받는 서비스, 타입, 컴포넌트, 컴포저블등을 작성합니다. `__sample__`을 통해 참고합니다.
- pages : page에 해당되는 vue를 작성합니다. 파일 및 폴더에 따라 라우팅을 동적으로 생성해주기 때문에 모르시다면 꼭 다음 링크를 확인하세요. ([링크](https://nuxt.com/docs/guide/directory-structure/pages))
- plugins : vue 라이브러리 적용 및 커스텀 라이브러리 적용시 사용합니다.
- service : API 서비스 관련 base level service
- store: pinia store, 서버와 별개로 관리되어야할 전역적 상태 저장소 예) 선택한 테마, 접속한 단말기 종류 tablet|mobile|desktop
- types: global.ts 에 전역적으로 사용하는 enum|type|interface를 작성해주세요.
- utils (auto-import): (`namespace` 패턴 사용X) 기능 별로 파일을 작성하여 내보내기 하시면됩니다.
  파일명을 작성할때는 $confirm / $alert 과 같이 `\$`를 작성해주세요.

---

## Guide

### Dialog

#### 기본 alert

```js
$alert('내용 호출!'); // ~/components/common/AppAlert.vue를 사용
```

#### 기본 confirm

```js
$confirm('내용 호출!'); // ~/components/common/AppConfirm.vue 사용
```

### Hydration Axios

기존 내장된 `ofetch`를 사용하는 경우 `useFetch`를 사용.

`axios`사용을 원하는 경우

`useAsyncData` Composable를 사용하여 감싸야 Hydration이 처리 될 것이다.

참조 / https://nuxt.com/docs/api/composables/use-async-data

TODO: 내용정리..
