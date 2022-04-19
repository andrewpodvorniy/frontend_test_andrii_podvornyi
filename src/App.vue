<template>
  <Component :is="BaseList" :items="items" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useListStore } from '@/stores/list';
import BaseList from '@/components/base/BaseList.vue';

const listStore = useListStore();

const items = computed(() => listStore.items);
</script>

<style lang="scss">
@import '@/assets/styles/base';
@import '@/assets/styles/normalize';
</style>
