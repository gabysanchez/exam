//class CRUD local storage
export class LocalStorage {
  constructor() {}

  public async get(key: string): Promise<any> {
    return localStorage.getItem(key);
  }

  public async set(key: string, value: any): Promise<void> {
    localStorage.setItem(key, value);
  }

  public async remove(key: string): Promise<void> {
    localStorage.removeItem(key);
  }
}
