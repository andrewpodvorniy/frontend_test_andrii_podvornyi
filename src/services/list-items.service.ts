import type { ListItem } from '@/types/list-item.type';
import { SAVED_ITEMS_LOCAL_STORAGE_KEY } from '@/constants/local-storage.constants';
import type { ILocalStorageService } from '@/types/local-storage-service.type';

class ListItemsService {
  constructor(private _localStorageService: ILocalStorageService) {}

  fetchItems(): ListItem[] {
    const data = this._localStorageService.getData<ListItem[]>(
      SAVED_ITEMS_LOCAL_STORAGE_KEY
    );

    return data ?? [];
  }

  saveItems(data: ListItem[]) {
    this._localStorageService.setData(SAVED_ITEMS_LOCAL_STORAGE_KEY, data);
  }
}

export default ListItemsService;
