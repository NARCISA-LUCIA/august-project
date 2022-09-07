import { Observable } from 'rxjs';
import { Feature } from './../model/feature';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class FeatureService {
  constructor(private httpClient: HttpClient) {}

  create(feature: Feature): Observable<Feature> {
    let headerList = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<Feature>('/api/feature', feature, {
      headers: headerList,
    });
  }

  get(id: number): Observable<Feature> {
    const url = '/api/feature/' + id;
    return this.httpClient.get<Feature>(url);
  }

  getAllByProjectId(projectId: number): Observable<Feature[]> {
    const url = '/api/feature/project/' + projectId;
    return this.httpClient.get<Feature[]>(url);
  }

  update(feature: Feature): Observable<Feature> {
    let headerList = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.put<Feature>('/api/feature/', feature, {
      headers: headerList,
    });
  }

  delete(id: number): Observable<void> {
    const url = '/api/feature/' + id;
    return this.httpClient.delete<void>(url);
  }
}
