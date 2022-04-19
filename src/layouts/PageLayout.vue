<template>
  <section class="layout">
    <Header class="layout__header" />
    <main class="layout__body">
      <slot />
    </main>
  </section>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
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
