import { defineStore } from 'pinia';

import type { ListItem } from '@/types/list-item.type';
import ListItemsService from '@/services/list-items.service';
import localStorageService from '@/services/local-storage.service';

interface ListProperties {
  items: ListItem[];
}

export const useListStore = defineStore('list', {
  state: (): ListProperties => ({
    items: [],
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
    saveItems() {
      const listItemsService = new ListItemsService(localStorageService);
      listItemsService.saveItems(this.items);
    },
    fetchItems() {
      const listItemsService = new ListItemsService(localStorageService);
      this.items = listItemsService.fetchItems();
    },
  },
});
