<template>
  <input
    type="text"
    class="text-field"
    ref="textFieldRef"
    :placeholder="props.placeholder"
    :value="props.modelValue"
    :readonly="isReadonly"
    @input="handleInput"
  />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{
  modelValue: string;
  placeholder?: string;
  isReadonly?: boolean;
  triggerFocus?: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const textFieldRef = ref<HTMLInputElement | null>(null);

const handleInput = (event: Event) =>
  emit('update:modelValue', (event.target as HTMLInputElement).value);

watch(
  () => props.triggerFocus,
  () => textFieldRef.value?.focus()
);
</script>

<style lang="scss">
@use '@/assets/styles/functions';
@use '@/assets/styles/variables';

.text-field {
  width: 100%;
  height: variables.$default-interactive-elements-height;
  padding: functions.toRem(10) functions.toRem(14);
  color: variables.$grey-4;
  background-color: variables.$white-1;
  border-radius: variables.$default-border-radius;
  border: 0;
  box-shadow: none;
  font-size: functions.toRem(16);
  transition: color variables.$hover-duration,
    background-color variables.$hover-duration,
    border-color variables.$hover-duration, box-shadow variables.$hover-duration;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: variables.$grey-2;
  }
}
</style>
