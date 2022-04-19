<template>
  <li class="list-item">
    <p class="list-item__title">{{ title }}</p>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables';
@import '@/assets/styles/extends/list.extends';

.list-item {
  @extend #list-item;

  &__title {
    display: flex;
    align-items: center;
    min-height: toRem(46);
    padding: 0 toRem(15);
    color: $grey-5;
  }
}
</style>
