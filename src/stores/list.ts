import { defineStore } from 'pinia';

import type { ListItem } from '@/types/list-item.type';
import listItemsService from '@/services/list-items.service';
import { ref } from 'vue';

export const useListStore = defineStore('list', () => {
  const items = ref<ListItem[]>([]);

  const savedItems = listItemsService.fetchItems();

  if (savedItems) {
    items.value = savedItems;
  }

  const addItem = (item: ListItem) => {
    items.value.push(item);
  };

  const updateItem = (updatedItem: ListItem) => {
    const updatedItemIndex = items.value.findIndex(
      (item) => item.id === updatedItem.id
    );

    if (updatedItemIndex < 0) return;

    items.value.splice(updatedItemIndex, 1, updatedItem);
  };

  const removeItem = (itemId: string) => {
    items.value = items.value.filter((item) => item.id !== itemId);
  };

  const saveItems = () => listItemsService.saveItems(items.value);

  return { items, addItem, updateItem, removeItem, saveItems };
});
