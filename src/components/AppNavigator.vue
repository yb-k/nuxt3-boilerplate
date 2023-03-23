<template>
  <div class="side-menu">
    <nav>
      <!-- <ul>
        <li>
          <button type="button" class="depth1 type1 none-sub selected">
            대시보드
          </button>
        </li>
        <li>
          <button type="button" class="depth1 type2">설문관리</button>
          <ul class="depth2-lst">
            <li><button type="button">설문 목록</button></li>
            <li><button type="button">승인 요청함</button></li>
            <li><button type="button">승인 대기함</button></li>
            <li><button type="button">배포 관리</button></li>
          </ul>
        </li>
        <li>
          <button type="button" class="depth1 type3">배포 관리</button>
          <ul class="depth2-lst">
            <li><button type="button">배포 목록</button></li>
            <li><button type="button">발송 대상 관리</button></li>
          </ul>
        </li>
        <li>
          <button type="button" class="depth1 type4">운영 관리</button>
          <ul class="depth2-lst">
            <li><button type="button">공지사항 관리</button></li>
            <li><button type="button">설문 카테고리 관리</button></li>
            <li><button type="button">본인 확인 서비스 관리</button></li>
            <li><button type="button">비밀번호정책 관리</button></li>
            <li><button type="button">개인정보 다운로드 기록</button></li>
            <li><button type="button">관리자 정보변경 기록</button></li>
            <li><button type="button">로그인 기록</button></li>
          </ul>
        </li>
        <li>
          <button type="button" class="depth1 type5">설정</button>
          <ul class="depth2-lst">
            <li><button type="button">계정/권한 관리</button></li>
            <li><button type="button">승인그룹 관리</button></li>
            <li><button type="button">메뉴 관리</button></li>
          </ul>
        </li>
      </ul> -->
      <AppMenu :menus="menus" />
    </nav>
  </div>
</template>
<script setup lang="ts">
import AppMenu from './AppMenu.vue';
const menus = reactive([
  { label: '대시보드', class: 'type1', path: '/dashboard' },
  {
    label: '설문 관리',
    class: 'type2',
    children: [
      { label: '설문 목록', path: '/sample/wyswyg' },
      { label: '승인 요청함' },
      { label: '승인 대기함' },
      { label: '배포 관리' },
    ],
  },
  {
    label: '배포 관리',
    class: 'type3',
    children: [{ label: '배포 목록' }, { label: '발송 대상 관리' }],
  },
  {
    label: '운영 관리',
    class: 'type4',
    children: [
      {
        label: '공지사항 관리',
        path: '/parent',
      },
      { label: '설문 카테고리 관리' },
      { label: '본인 확인 서비스 관리' },
      { label: '비밀번호정책 관리' },
      { label: '개인정보 다운로드 기록' },
      { label: '관리자 정보변경 기록' },
      { label: '로그인 기록' },
    ],
  },
  {
    label: '설정',
    class: 'type5',
    children: [
      { label: '계정/권한 관리' },
      { label: '승인그룹 관리' },
      { label: '메뉴 관리' },
    ],
  },
]);
</script>
