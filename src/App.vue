<template>
  <PageLayout>
    <Component
      :is="isEditingMode ? EditableList : ViewableList"
      :items="items"
    />
  </PageLayout>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useListStore } from '@/stores/list';
import { useModeStore } from '@/stores/mode';
import PageLayout from '@/layouts/PageLayout.vue';
import EditableList from '@/components/EditableList.vue';
import ViewableList from '@/components/ViewableList.vue';

const listStore = useListStore();
const modeStore = useModeStore();

const items = computed(() => listStore.items);
const isEditingMode = computed(() => modeStore.isEditing);
</script>

<style lang="scss">
@use '@/assets/styles/fonts';
@use '@/assets/styles/base';
@use '@/assets/styles/normalize';
@use '@/assets/styles/animation';
@use '@/assets/styles/variables';
</style>
