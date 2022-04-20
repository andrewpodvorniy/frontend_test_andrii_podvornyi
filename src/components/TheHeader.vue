<template>
  <header class="header">
    <div class="header__controls">
      <BaseSwitch
        :model-value="isEditingMode"
        @update:model-value="modeStore.toggleMode"
        disabled-value="View"
        enabled-value="Edit"
      />
      <BaseButton @click="saveData">Save</BaseButton>
    </div>
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
  box-shadow: 0 0 10px 1px $grey-2;

  &__controls {
    * + * {
      margin-left: toRem(30);
    }
  }
}
</style>

<script setup lang="ts">
import { computed } from 'vue';
import { useListStore } from '@/stores/list';
import { useModeStore } from '@/stores/mode';
import BaseSwitch from '@/components/base/BaseSwitch.vue';
import BaseButton from '@/components/base/BaseButton.vue';
import listItemsService from '@/services/list-items.service';

const listStore = useListStore();
const modeStore = useModeStore();

const isEditingMode = computed(() => modeStore.isEditing);
const saveData = () => listItemsService.saveItems(listStore.items);
</script>
