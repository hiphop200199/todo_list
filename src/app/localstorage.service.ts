import { Injectable } from '@angular/core';

//標示為可提供的服務，服務提供層級為根元件
@Injectable({
  providedIn: 'root',
})
//包裝javascript原有的API可使程式碼增進組織性及可重複利用性
export class LocalstorageService {
  constructor() {}
  // 在local storage設定值
  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  // 從local storage取得值
  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  // 從 local storage移除某一個值
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  // 清除 local storage
  clear(): void {
    localStorage.clear();
  }
}
