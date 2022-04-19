<template>
  <li class="list-item">
    <BaseTextField
      placeholder="Enter list item title..."
      :model-value="inputValue"
      @update:model-value="onInput"
    />
  </li>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import debounce from 'just-debounce';
import type { ListItem } from '@/types/list-item.type';
import BaseTextField from '@/components/base/BaseTextField.vue';

const props = defineProps<{
  item: ListItem;
}>();

const emit = defineEmits<{
  (e: 'updateItem', item: ListItem): void;
  (e: 'removeItem', itemId: string): void;
}>();

const inputValue = ref(props.item.title);

const onInput = (value: string) => {
  inputValue.value = value;

  if (value) {
    updateItem(value);
    return;
  }

  emit('removeItem', props.item.id);
};

const updateItem = debounce((value: string) => {
  const updatedItem = {
    id: props.item.id,
    title: value,
  };

  emit('updateItem', updatedItem);
}, 300);
</script>

<style scoped lang="scss">
@import '@/assets/styles/extends/list.extends';

.list-item {
  @extend #list-item;
}
</style>
