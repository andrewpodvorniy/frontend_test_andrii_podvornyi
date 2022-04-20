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
@import '@/assets/styles/functions';
@import '@/assets/styles/variables';

.text-field {
  width: 100%;
  height: $default-interactive-elements-height;
  padding: toRem(10) toRem(14);
  color: $grey-4;
  background-color: $white-1;
  border-radius: $default-border-radius;
  border: 0;
  box-shadow: none;
  font-size: toRem(16);
  transition: color $hover-duration, background-color $hover-duration,
    border-color $hover-duration, box-shadow $hover-duration;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: $grey-2;
  }
}
</style>
