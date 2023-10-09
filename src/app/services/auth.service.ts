import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from "../../environments/environment";
import {Router} from "@angular/router";

export interface CurrentUser {
  id: number;
  name: string;
  email: string;
  accessToken: string;
  userGroups: string[]; // Added this line
  pdes: { id: number; title: string }[]; // Added this line
}

interface UserGroup {
  id: number;
  title: string;
}

interface PDE {
  id: number;
  title: string;
  url: string;
  email: string;
  address: string;
  phone: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSubject: BehaviorSubject<CurrentUser | null>;
  public currentUser: Observable<CurrentUser | null>;

  constructor(private http: HttpClient, private router: Router) {
    const storedUser = localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<CurrentUser | null>(storedUser ? JSON.parse(storedUser) : null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): CurrentUser | null {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.http.post<{ user: any }>(`${environment.apiUrl}/login`, { email, password })
      .pipe(map(response => {
        const user = response.user;
        const userGroupTitles = user.user_groups.map((group: UserGroup) => group.title);  // Specified type for 'group'
        const pdes = user.pdes.map((pde: PDE) => ({ id: pde.id, title: pde.title })); // Added this line
        const userToStore: CurrentUser = {
          id: user.id,
          name: user.name,
          email: user.email,
          accessToken: user.accessToken,
          userGroups: userGroupTitles, // Added this line
          pdes: pdes, // Added this line
        };
        localStorage.setItem('currentUser', JSON.stringify(userToStore));
        localStorage.setItem('token', user.accessToken);
        this.currentUserSubject.next(userToStore);
        return user;
      }));
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  getToken(): string | null {
    const storedUser = localStorage.getItem('currentUser');
    return storedUser ? JSON.parse(storedUser).accessToken : null;
  }

  getUserGroups(): string[] {
    const storedUser = localStorage.getItem('currentUser');
    return storedUser ? JSON.parse(storedUser).userGroups : [];
  }

  getPDEs(): { id: number; title: string }[] {
    const storedUser = localStorage.getItem('currentUser');
    return storedUser ? JSON.parse(storedUser).pdes : [];
  }

  getUserName(): string | null {
    const storedUser = localStorage.getItem('currentUser');
    return storedUser ? JSON.parse(storedUser).name : null;
  }

  getUserEmail(): string | null {
    const storedUser = localStorage.getItem('currentUser');
    return storedUser ? JSON.parse(storedUser).email : null;
  }

  isAdmin(): boolean {
    const storedUser = localStorage.getItem('currentUser');
    return storedUser ? JSON.parse(storedUser).userGroups.includes('admin') : false;
  }


  register(name: string, email: string, password: string, password_confirmation: string) {
    return this.http.post<any>(`${environment.apiUrl}/register`, { name, email, password, password_confirmation });
  }

  forgotPassword(email: string) {
    return this.http.post<any>(`${environment.apiUrl}/forgot-password`, { email });
  }

  resetPassword(token: string, email: string, password: string, password_confirmation: string) {
    return this.http.post<any>(`${environment.apiUrl}/reset-password`, { token, email, password, password_confirmation });
  }

  updateUser(userData: any) {
    return this.http.put<any>(`${environment.apiUrl}/update-user`, userData);
  }

  // Update user password
  updatePassword(passwordData: any) {
    return this.http.put<any>(`${environment.apiUrl}/update-password`, passwordData);
  }

  // change user password
  changePassword(passwordData: any) {
    return this.http.post<any>(`${environment.apiUrl}/change-password`, passwordData);
  }

  // Check current password
  checkPassword(passwordData: any) {
    return this.http.post<any>(`${environment.apiUrl}/check-password`, passwordData);
  }

  logout() {
    // clear local storage
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);

    // refresh the current page
    window.location.reload();
    // navigate to login page
    this.router.navigate(['/public/login'])
    // this.http.post<any>(`${environment.apiUrl}/logout`, {}).subscribe(
    //   () => {
    //
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );
  }
}
