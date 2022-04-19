<template>
  <ul class="list">
    <EditableListItem
      v-for="item in items"
      :key="item.id"
      :item="item"
      @updateItem="listStore.updateItem"
      @removeItem="listStore.removeItem"
    />
    <EditableListItemPlaceholder
      ref="placeholderListItem"
      @addItem="addNewItem"
    />
  </ul>
</template>

<script lang="ts">
export default {
  name: 'EditableList',
};
</script>

<script setup lang="ts">
import type { ListItem } from '@/types/list-item.type';
import { useListStore } from '@/stores/list';
import EditableListItem from '@/components/EditableListItem.vue';
import EditableListItemPlaceholder from '@/components/EditableListItemPlaceholder.vue';
import { getUniqueId } from '@/helpers/unique-id.helper';

defineProps<{
  items: ListItem[];
}>();

const listStore = useListStore();

const addNewItem = (title: string) =>
  listStore.addItem({ id: getUniqueId(), title });
</script>

<style scoped lang="scss">
@import '@/assets/styles/extends/list.extends';

.list {
  @extend #list;
}
</style>
