<template>
  <ul>
    <li v-for="item in items" :key="item.id">{{ item.title }}</li>
  </ul>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useListStore } from '@/stores/list';

const listStore = useListStore();

const items = computed(() => listStore.items);
</script>

<style lang="scss">
@import '@/assets/styles/base';
</style>
