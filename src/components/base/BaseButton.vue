<template>
  <button class="button">
    <slot />
  </button>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables';
@use '@/assets/styles/functions';

.button {
  min-width: functions.toRem(95);
  height: variables.$default-interactive-elements-height;
  padding: functions.toRem(10) functions.toRem(15);
  color: variables.$white-1;
  background-color: variables.$blue-1;
  border-radius: 20px;
  border: 0;
  box-shadow: none;
  transition: color variables.$hover-duration,
    background-color variables.$hover-duration,
    transform variables.$hover-duration, box-shadow variables.$hover-duration;

  &:hover {
    background-color: variables.$blue-2;
  }

  &:active {
    background-color: variables.$blue-3;
    box-shadow: 0 1px 5px 1px variables.$grey-3;
  }
}
</style>
