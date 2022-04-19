<template>
  <input
    type="text"
    class="text-field"
    :placeholder="placeholder"
    :value="modelValue"
    @input="handleInput"
  />
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string;
  placeholder?: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const handleInput = (event: Event) =>
  emit('update:modelValue', (event.target as HTMLInputElement).value);
</script>

<style lang="scss">
@import '@/assets/styles/functions';
@import '@/assets/styles/variables';

.text-field {
  width: 100%;
  height: toRem(46);
  padding: toRem(10) toRem(14);
  color: $grey-5;
  background-color: $white-1;
  border-radius: $default-border-radius;
  border: 1px solid $grey-3;
  font-size: toRem(16);
  font-family: inherit;
  box-shadow: 0 1px 1px 1px $grey-1;
  transition: color $hover-duration, background-color $hover-duration,
    border-color $hover-duration, box-shadow $hover-duration;

  &:focus {
    border-color: $blue-1;
    box-shadow: 0 0 0 3px $blue-2;
    outline: none;
  }
}
</style>
