import type { ILocalStorageService } from '@/types/local-storage-service.type';

class LocalStorageService implements ILocalStorageService {
  setData<T>(key: string, data: T) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getData<T>(key: string): T | null {
    const data = localStorage.getItem(key);

    if (!data) return null;

    return JSON.parse(data);
  }
}

export default new LocalStorageService();
