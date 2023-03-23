<script setup lang="ts">
import { Sample } from '../';
withDefaults(defineProps<{ sample: Sample }>(), {
  sample: () => ({ content: '' }),
});
</script>
<template>
  <div>
    {{ sample }}
  </div>
</template>
