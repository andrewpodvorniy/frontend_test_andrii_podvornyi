<template>
  <li class="list-item-placeholder">
    <BaseTextField
      placeholder="Enter list item title..."
      v-model="inputValue"
      @keyup="onKeyUp"
      v-focus
    />
  </li>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BaseTextField from '@/components/base/BaseTextField.vue';

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

<style scoped lang="scss">
@import '@/assets/styles/extends/list.extends';

.list-item-placeholder {
  @extend #list-item;
}
</style>
