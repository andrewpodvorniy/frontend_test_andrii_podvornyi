<template>
  <section class="layout">
    <TheHeader class="layout__header" />
    <main class="layout__body">
      <slot />
    </main>
  </section>
</template>

<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue';
</script>

<style scoped lang="scss">
@import '@/assets/styles/functions';

.layout {
  &__header {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 10;
  }

  &__body {
    flex: 1;
    padding: toRem(20);
  }
}
</style>
