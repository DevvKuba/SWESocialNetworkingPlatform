import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user';
import { Photo } from '../_models/photo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl = environment.apiUrl;
  private http = inject(HttpClient);

  getUserWithRoles() : Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl + 'admin/users-with-roles');
  }

  updateUserRoles(userId: number, roles: string[]) : Observable<string[]>{
    return this.http.post<string[]>(this.baseUrl + 'admin/edit-roles/' + userId + '?roles=' + roles, {});
  }

  getPhotosForApproval() : Observable<Photo[]>{
    // need to potentially create a PhotoDto to return appropriate data from the api call
    return this.http.get<Photo[]>(`${this.baseUrl}admin/photos-to-moderate`);
  }

  approvePhoto(photoId: number) : Observable<Object>{
    return this.http.post(`${this.baseUrl}admin/approve-photo/${photoId}`, {});

  }
  rejectPhoto(photoId: number) : Observable<Object>{
    return this.http.post(`${this.baseUrl}admin/reject-photo/${photoId}`, {});

  }

}
