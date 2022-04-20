export interface ILocalStorageService {
  setData<T>(key: string, data: T): void;
  getData<T>(key: string): T | null;
}
