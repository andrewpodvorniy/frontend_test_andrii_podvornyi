<template>
  <label :class="['switch', { 'switch--enabled': modelValue }]">
    <span class="switch__label" v-if="disabledValue">{{ disabledValue }}</span>
    <span class="switch__slider">
      <input
        type="checkbox"
        class="switch__input"
        :checked="modelValue"
        @change="handleChange"
        v-trigger-enter
      />
      <span class="switch__circle" />
    </span>
    <span class="switch__label" v-if="enabledValue">{{ enabledValue }}</span>
  </label>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: boolean;
  disabledValue?: string;
  enabledValue?: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();

const handleChange = (event: Event) =>
  emit('update:modelValue', (event.target as HTMLInputElement).checked);
</script>

<style lang="scss">
@use '@/assets/styles/functions';
@use '@/assets/styles/variables';

.switch {
  $enabled-class: '';

  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  user-select: none;

  &--enabled {
    $enabled-class: &;
  }

  &__label {
    $label-indent: functions.toRem(10);

    transition: color variables.$hover-duration;

    &:first-child {
      margin-right: $label-indent;
      color: variables.$dark-1;

      #{$enabled-class} & {
        color: variables.$grey-2;
      }
    }

    &:last-child {
      margin-left: $label-indent;
      color: variables.$grey-2;

      #{$enabled-class} & {
        color: variables.$dark-1;
      }
    }
  }

  &__slider {
    position: relative;
    display: block;
    width: functions.toRem(46);
    height: functions.toRem(26);
    padding: functions.toRem(2);
    background-color: variables.$white-1;
    border: 1px solid variables.$grey-3;
    border-radius: 30px;
    transition: background-color 0.3s;
    cursor: pointer;
  }

  &__input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-appearance: none;
    pointer-events: none;
  }

  &__circle {
    display: block;
    width: 50%;
    height: 100%;
    background-color: variables.$grey-3;
    border-radius: 50%;
    box-shadow: none;
    transition: transform variables.$hover-duration ease-in-out,
      background-color variables.$hover-duration,
      box-shadow variables.$hover-duration;

    #{$enabled-class} & {
      transform: translateX(100%);
    }
  }
}
</style>
