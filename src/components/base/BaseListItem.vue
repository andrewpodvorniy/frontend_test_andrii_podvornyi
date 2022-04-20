<template>
  <li class="list-item">
    <slot />
  </li>
</template>

<style scoped lang="scss">
@use '@/assets/styles/functions';
@use '@/assets/styles/variables';

.list-item {
  width: 100%;
  padding: functions.toRem(20);
  background-color: variables.$white-1;
  border: 1px solid variables.$grey-2;
  border-radius: variables.$default-border-radius;
  box-shadow: 0 1px 1px 1px variables.$grey-1;

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  &__title {
    display: flex;
    align-items: center;
    min-height: functions.toRem(46);
    padding: 0 functions.toRem(15);
    color: variables.$grey-4;
  }
}
</style>
