<template>
  <ul class="list">
    <slot />
  </ul>
</template>

<style scoped lang="scss">
@import '@/assets/styles/functions';

.list {
  width: 100%;
  max-width: toRem(500);
  margin: 0 auto;
  padding: 20px;
}
</style>
