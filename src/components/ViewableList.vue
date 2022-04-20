<template>
  <BaseList>
    <template v-if="items.length">
      <BaseListItem v-for="item in items" :key="item.id">
        <EditableItem :item="item" isReadonly />
      </BaseListItem>
    </template>
    <li v-else>
      <p>No data found</p>
    </li>
  </BaseList>
</template>

<script setup lang="ts">
import type { ListItem } from '@/types/list-item.type';
import BaseList from '@/components/base/BaseList.vue';
import BaseListItem from '@/components/base/BaseListItem.vue';
import EditableItem from '@/components/EditableItem.vue';

defineProps<{
  items: ListItem[];
}>();
</script>
