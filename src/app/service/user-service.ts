import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  constructor(private httpClient: HttpClient) {}

  create(user: User): Observable<User> {
    let headerList = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<User>('/api/user', user, {
      headers: headerList,
    });
  }

  get(id: number): Observable<User> {
    const url = '/api/user/' + id;
    return this.httpClient.get<User>(url);
  }

  getAllByCompanyId(companyId: number): Observable<User[]> {
    const url = '/api/user/company/' + companyId;
    return this.httpClient.get<User[]>(url);
  }

  getAllUsersByCompanyIdAndProjectId(companyId: number, projectId: number): Observable<User[]> {
    console.log('hear...')
    const url = '/api/user/company/' + companyId + '/project/' + projectId;
    return this.httpClient.get<User[]>(url);
  }

  update(user: User): Observable<User> {
    let headerList = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.put<User>('/api/user', user, {
      headers: headerList,
    });
  }

  delete(id: number): Observable<void> {
    const url = '/api/user/' + id;
    return this.httpClient.delete<void>(url);
  }
}
