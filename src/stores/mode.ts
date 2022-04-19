import { defineStore } from 'pinia';

export const useModeStore = defineStore({
  id: 'mode',
  state: () => ({
    isEditing: true,
  }),
  actions: {
    toggleMode() {
      this.isEditing = !this.isEditing;
    },
  },
});
