import { defineStore } from 'pinia';

import type { ListItem } from '@/types/list-item.type';

const initialItemsValue: ListItem[] = [
  { id: '1', title: 'List item 1' },
  { id: '2', title: 'List item 2' },
];

export const useListStore = defineStore({
  id: 'list',
  state: () => ({
    items: initialItemsValue,
  }),
  actions: {
    addItem(item: ListItem) {
      this.items.push(item);
    },
    updateItem(updatedItem: ListItem) {
      const updatedItemIndex = this.items.findIndex(
        (item) => item.id === updatedItem.id
      );

      if (updatedItemIndex < 0) return;

      this.items.splice(updatedItemIndex, 1, updatedItem);
    },
    removeItem(itemId: string) {
      this.items = this.items.filter((item) => item.id !== itemId);
    },
  },
});
