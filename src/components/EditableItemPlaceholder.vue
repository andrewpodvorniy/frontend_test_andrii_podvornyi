<template>
  <BaseTextField
    placeholder="Enter list item title..."
    :trigger-focus="triggerFocus"
    v-model="inputValue"
    v-focus
    @keyup="onKeyUp"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BaseTextField from '@/components/base/BaseTextField.vue';

defineProps<{
  triggerFocus?: boolean;
}>();

const emit = defineEmits<{
  (e: 'addItem', itemTitle: string): void;
}>();

const inputValue = ref('');

const onKeyUp = (event: KeyboardEvent) => {
  if (event.key === 'Enter' && inputValue.value.length) {
    emit('addItem', (event.target as HTMLInputElement).value);
    inputValue.value = '';
  }
};
</script>
