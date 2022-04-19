<template>
  <PageLayout>
    <!-- Added KeepAlive to handle debounced input event on fast exit, and to keep new item value -->
    <KeepAlive include="EditableList">
      <Component :is="isEditingMode ? EditableList : BaseList" :items="items" />
    </KeepAlive>
  </PageLayout>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useListStore } from '@/stores/list';
import { useModeStore } from '@/stores/mode';
import PageLayout from '@/layouts/PageLayout.vue';
import BaseList from '@/components/base/BaseList.vue';
import EditableList from '@/components/EditableList.vue';

const listStore = useListStore();
const modeStore = useModeStore();

const items = computed(() => listStore.items);
const isEditingMode = computed(() => modeStore.isEditing);
</script>

<style lang="scss">
@import '@/assets/styles/base';
@import '@/assets/styles/normalize';
</style>
