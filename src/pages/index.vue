<template>
  <ul>
    <li>
      <button @click="onClickAlert">alert</button>
    </li>
    <li>
      <button @click="onClickConfirm">confirm</button>
    </li>
    <li>
      <NuxtLink to="sample/validation">
        <button>validation sample</button>
      </NuxtLink>
    </li>
    <li>
      <NuxtLink to="sample/none">
        <button>none layout sample</button>
      </NuxtLink>
    </li>
  </ul>
</template>
<script setup lang="ts">
const onClickAlert = async () => {
  alert(`action : ${await $alert('alert!')}`);
};

const onClickConfirm = async () => {
  alert(`action : ${await $confirm('confirm!')}`);
};
</script>
