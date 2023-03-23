<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
  <WidgetContainerModal />
</template>
<script setup lang="ts">
import { container as WidgetContainerModal } from 'jenesius-vue-modal';
</script>
