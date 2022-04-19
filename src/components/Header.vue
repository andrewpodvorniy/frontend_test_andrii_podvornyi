<template>
  <header class="header">
    <BaseSwitch
      :model-value="isEditingMode"
      @update:model-value="modeStore.toggleMode"
      disabled-value="View"
      enabled-value="Edit"
    />
  </header>
</template>

<style scoped lang="scss">
@import '@/assets/styles/functions';
@import '@/assets/styles/variables';

.header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: toRem(20);
  background-color: $white-1;
  box-shadow: 0 0 10px 1px $grey-3;
}
</style>

<script setup lang="ts">
import { computed } from 'vue';
import { useModeStore } from '@/stores/mode';
import BaseSwitch from '@/components/base/BaseSwitch.vue';

const modeStore = useModeStore();

const isEditingMode = computed(() => modeStore.isEditing);
</script>
