<template>
  <ul class="list">
    <BaseListItem v-for="item in items" :key="item.id" :title="item.title" />
  </ul>
</template>

<script lang="ts">
export default {
  name: 'BaseList',
};
</script>

<script setup lang="ts">
import type { ListItem } from '@/types/list-item.type';
import BaseListItem from '@/components/base/BaseListItem.vue';

defineProps<{
  items: ListItem[];
}>();
</script>

<style scoped lang="scss">
@import '@/assets/styles/extends/list.extends';

.list {
  @extend #list;
}
</style>
