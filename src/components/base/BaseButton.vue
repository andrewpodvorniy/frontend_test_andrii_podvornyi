<template>
  <button class="button">
    <slot />
  </button>
</template>

<style scoped lang="scss">
@import '@/assets/styles/variables';
@import '@/assets/styles/functions';

.button {
  min-width: toRem(95);
  height: $default-interactive-elements-height;
  padding: toRem(10) toRem(15);
  color: $white-1;
  background-color: $blue-1;
  border-radius: 20px;
  border: 0;
  box-shadow: none;
  transition: color $hover-duration, background-color $hover-duration,
    transform $hover-duration, box-shadow $hover-duration;

  &:hover {
    background-color: $blue-2;
  }

  &:active {
    background-color: $blue-3;
    box-shadow: 0 1px 5px 1px $grey-3;
  }
}
</style>
