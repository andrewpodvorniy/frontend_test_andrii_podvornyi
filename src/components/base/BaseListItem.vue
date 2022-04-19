<template>
  <li class="list-item">
    {{ title }}
  </li>
</template>

<script lang="ts">
export default {
  name: 'BaseListItem',
};
</script>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables';
@import '@/assets/styles/extends/list.extends';

.list-item {
  @extend #list-item;
}
</style>
