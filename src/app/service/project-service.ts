import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project } from '../model/project';
import { Observable } from 'rxjs';

@Injectable()
export class ProjectService {
  constructor(private httpClient: HttpClient) {}

  create(project: Project): Observable<Project> {
    let headerList = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<Project>('/api/project', project, {
      headers: headerList,
    });
  }

  get(id: number): Observable<Project> {
    const url = '/api/project/' + id;
    return this.httpClient.get<Project>(url);
  }

  getAll(companyId: number): Observable<Project[]> {
    const url = '/api/project/company/' + companyId;
    return this.httpClient.get<Project[]>(url);
  }

  update(project: Project): Observable<Project> {
    let headerList = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.put<Project>('/api/project', project, {
      headers: headerList,
    });
  }

  delete(id: number): Observable<void> {
    const url = '/api/project/' + id;
    return this.httpClient.delete<void>(url);
  }
}
