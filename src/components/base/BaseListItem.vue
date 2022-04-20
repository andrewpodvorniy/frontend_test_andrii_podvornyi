<template>
  <li class="list-item">
    <slot />
  </li>
</template>

<style scoped lang="scss">
@import '@/assets/styles/functions';
@import '@/assets/styles/variables';

.list-item {
  width: 100%;
  padding: toRem(20);
  background-color: $white-1;
  border: 1px solid $grey-2;
  border-radius: $default-border-radius;
  box-shadow: 0 1px 1px 1px $grey-1;

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  &__title {
    display: flex;
    align-items: center;
    min-height: toRem(46);
    padding: 0 toRem(15);
    color: $grey-4;
  }
}
</style>
