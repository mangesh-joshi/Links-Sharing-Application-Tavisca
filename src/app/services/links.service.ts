import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Link } from '../models/link';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  constructor(private http: HttpClient) { }

  // Get all links list call to json-server
  getLinks(): Observable<Link[]> {
    return this.http.get<Link[]>(environment.linksUrl);
  }

  // Get single link details
  getLink(linkId: string | number): Observable<Link> {
    return this.http.get<Link>(`${environment.linksUrl}/${linkId}`);
  }

  // Add link call to json-server
  addLink(payload: Link): Observable<Link> {
    return this.http.post<Link>(environment.linksUrl, payload);
  }

  // Update link call to json-srver
  updateLink(linkId: string | number, changes: Partial<Link>): Observable<Link> {
    return this.http.put<Link>(`${environment.linksUrl}/${linkId}`, changes);
  }

  // Delete link call to json-server
  deleteLink(payload: number): any {
    return this.http.delete(`${environment.linksUrl}/${payload}`);
  }
}


