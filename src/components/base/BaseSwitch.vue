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
@import '@/assets/styles/functions';
@import '@/assets/styles/variables';

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
    $label-indent: toRem(10);

    &:first-child {
      margin-right: $label-indent;
    }

    &:last-child {
      margin-left: $label-indent;
    }
  }

  &__slider {
    position: relative;
    display: block;
    width: toRem(46);
    height: toRem(26);
    padding: toRem(2);
    background-color: $white-1;
    border: 1px solid $grey-4;
    border-radius: 30px;
    transition: background-color 0.3s;
    cursor: pointer;

    #{$enabled-class} & {
      background-color: $blue-1;
      border-color: $blue-1;
    }
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
    background-color: $grey-4;
    border-radius: 50%;
    box-shadow: none;
    transition: transform 0.3s ease-in-out, background-color 0.3s,
      box-shadow 0.3s;

    #{$enabled-class} & {
      background-color: $white-1;
      box-shadow: 1px 1px 1px 1px rgb(24, 69, 187);
      transform: translateX(100%);
    }
  }
}
</style>
