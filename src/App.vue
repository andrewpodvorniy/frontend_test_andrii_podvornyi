<template>
  <PageLayout>
    <Component :is="BaseList" :items="items" />
  </PageLayout>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useListStore } from '@/stores/list';
import PageLayout from '@/layouts/PageLayout.vue';
import BaseList from '@/components/base/BaseList.vue';

const listStore = useListStore();

const items = computed(() => listStore.items);
</script>

<style lang="scss">
@import '@/assets/styles/base';
@import '@/assets/styles/normalize';
</style>
