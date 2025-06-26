import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Member } from '../_models/member';
import { PaginatedResult } from '../_models/pagination';
import { setPaginatedResponse, setPaginationHeaders } from './paginationHelper';

@Injectable({
  providedIn: 'root'
})
export class FollowService {
  baseUrl = environment.apiUrl;
  private http = inject(HttpClient)
  followIds = signal<number[]>([]);
  paginatedResult = signal<PaginatedResult<Member[]> | null>(null);

  toggleFollow(targetId: number){
    return this.http.post(`${this.baseUrl}likes/${targetId}`, {})
  }

  getFollow(predicate: string, pageNumber: number, pageSize: number){
    let params = setPaginationHeaders(pageNumber, pageSize);

    params = params.append('predicate', predicate);

    // ?predicate is a way to set a variable for a select http request
    // check if this returns correctly
    return this.http.get<Member[]>(`${this.baseUrl}likes?`, {observe: 'response', params})
    .subscribe({
      next: response => setPaginatedResponse(response, this.paginatedResult)
    })
  }

  getFollowIds(){
    return this.http.get<number[]>(`${this.baseUrl}likes/list`).subscribe({
      next: ids => this.followIds.set(ids)
    })
  }
}
