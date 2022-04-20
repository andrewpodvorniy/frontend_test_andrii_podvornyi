const localStorageService = {
  setData<T>(key: string, data: T) {
    localStorage.setItem(key, JSON.stringify(data));
  },
  getData<T>(key: string): T | null {
    const data = localStorage.getItem(key);

    if (!data) return null;

    return JSON.parse(data);
  },
};

export default localStorageService;
