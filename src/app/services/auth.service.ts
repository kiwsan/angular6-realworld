import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';
import { map, distinctUntilChanged, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticatedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  isAuthenticated: Observable<boolean> = this.isAuthenticatedSubject.asObservable().pipe(distinctUntilChanged());

  getIsAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }
}
