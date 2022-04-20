<template>
  <ul class="list">
    <TransitionGroup name="list-animation" v-if="items.length">
      <BaseListItem v-for="item in items" :key="item.id" :title="item.title" />
    </TransitionGroup>
    <li v-else>
      <p class="list__no-data">No data found</p>
    </li>
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
@import '@/assets/styles/variables';

.list {
  @extend #list;

  &__no-data {
    color: $grey-4;
    text-align: center;
  }
}
</style>
