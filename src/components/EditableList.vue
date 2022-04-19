<template>
  <ul class="list">
    <EditableListItem
      v-for="item in items"
      :key="item.id"
      :item="item"
      @updateItem="listStore.updateItem"
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

defineProps<{
  items: ListItem[];
}>();

const listStore = useListStore();
</script>

<style scoped lang="scss">
@import '@/assets/styles/extends/list.extends';

.list {
  @extend #list;
}
</style>
