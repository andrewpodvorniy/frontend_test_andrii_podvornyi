<template>
  <ul class="list">
    <slot />
  </ul>
</template>

<style scoped lang="scss">
@use '@/assets/styles/functions';

.list {
  width: 100%;
  max-width: functions.toRem(500);
  margin: 0 auto;
  padding: 20px;
}
</style>
