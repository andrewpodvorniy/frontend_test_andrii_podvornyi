<template>
  <BaseList>
    <TransitionGroup name="list-animation">
      <BaseListItem v-for="item in items" :key="item.id">
        <EditableItem
          :item="item"
          @update-item="listStore.updateItem"
          @remove-item="removeItem"
        />
      </BaseListItem>
      <BaseListItem key="_placeholder">
        <EditableItemPlaceholder
          @add-item="addNewItem"
          :trigger-focus="triggerFocus"
        />
      </BaseListItem>
    </TransitionGroup>
  </BaseList>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { ListItem } from '@/types/list-item.type';
import { useListStore } from '@/stores/list';
import EditableItem from '@/components/EditableItem.vue';
import EditableItemPlaceholder from '@/components/EditableItemPlaceholder.vue';
import BaseList from '@/components/base/BaseList.vue';
import BaseListItem from '@/components/base/BaseListItem.vue';
import { getUniqueId } from '@/helpers/unique-id.helper';

defineProps<{
  items: ListItem[];
}>();

const listStore = useListStore();

const triggerFocus = ref(false);

const addNewItem = (title: string) =>
  listStore.addItem({ id: getUniqueId(), title });

const removeItem = (itemId: string) => {
  triggerFocus.value = !triggerFocus.value;
  listStore.removeItem(itemId);
};
</script>
