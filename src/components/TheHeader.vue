<template>
  <header class="header">
    <div class="header__controls">
      <BaseSwitch
        :model-value="isEditingMode"
        @update:model-value="modeStore.toggleMode"
        disabled-value="View"
        enabled-value="Edit"
      />
      <BaseButton @click="listStore.saveItems">Save</BaseButton>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useListStore } from '@/stores/list';
import { useModeStore } from '@/stores/mode';
import BaseSwitch from '@/components/base/BaseSwitch.vue';
import BaseButton from '@/components/base/BaseButton.vue';

const listStore = useListStore();
const modeStore = useModeStore();

const isEditingMode = computed(() => modeStore.isEditing);
</script>

<style scoped lang="scss">
@use '@/assets/styles/functions';
@use '@/assets/styles/variables';

.header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: functions.toRem(20);
  background-color: variables.$white-1;
  box-shadow: 0 0 10px 1px variables.$grey-2;

  &__controls {
    * + * {
      margin-left: functions.toRem(30);
    }
  }
}
</style>
