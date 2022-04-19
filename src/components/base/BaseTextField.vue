<template>
  <label class="text-field">
    <span v-if="label" class="text-field__label">{{ label }}</span>
    <input
      type="text"
      class="text-field__input"
      :value="modelValue"
      @input="handleInput"
    />
  </label>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string;
  label?: string;
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
  display: block;
  width: 100%;

  &__label {
    display: block;
    width: 100%;
    margin-bottom: toRem(5);
    color: $grey-4;
    font-size: toRem(14);
    transition: color $hover-duration;
  }

  &__input {
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
}
</style>
