import type { ListItem } from '@/types/list-item.type';
import { SAVED_ITEMS_LOCAL_STORAGE_KEY } from '@/constants/local-storage.constants';
import localStorageService from '@/services/local-storage.service';

const initialList = [
  { id: '1', title: 'List item 1' },
  { id: '2', title: 'List item 2' },
];

const listItemsService = {
  fetchItems(): ListItem[] {
    const data = localStorageService.getData<ListItem[]>(
      SAVED_ITEMS_LOCAL_STORAGE_KEY
    );

    return data ?? initialList;
  },
  saveItems(data: ListItem[]) {
    localStorageService.setData(SAVED_ITEMS_LOCAL_STORAGE_KEY, data);
  },
};

export default listItemsService;
