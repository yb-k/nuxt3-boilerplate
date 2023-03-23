<template>
  <!-- <div> -->

  <div>
    <AppHeader :user="{ name: '__이름__' }" />
    <slot />
  </div>
  <!-- </div> -->
</template>
<script setup lang="ts">
import AppHeader from '~/components/AppHeader.vue';
</script>
