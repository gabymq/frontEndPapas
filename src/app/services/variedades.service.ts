import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from '../config/backend';

@Injectable({
  providedIn: 'root'
})
export class VariedadesService {

  private apiUrl = API_URL;

  constructor(private http: HttpClient) { }

  postVariedades(name: string, description: string) {
    const url = `${this.apiUrl}variedades`;
    const body = { name, description };

    return this.http.post(url, body).pipe(
      map((res: any) => res.data)
    );
  }

  getVariedades(params: any = {}) {
    const url = `${this.apiUrl}variedades`;

    return this.http.get(url).pipe(
      map((res: any) => res.data)
    );
  }

  getVariedad( id: string) {
    const url = `${this.apiUrl}variedades/${id}`;

    return this.http.get(url).pipe(
      map((res: any) => res.data)
    );
  }

  putVariedades(id: string, body: any) {
    const url = `${this.apiUrl}variedades/${id}`;

    return this.http.put(url, body).pipe(
      map((res: any) => res.data )
    );
  }

  deleteVariedad(id: string) {
    const url = `${this.apiUrl}variedades/${id}`;

    return this.http.delete(url).pipe(
      map((res: any) => res.data )
    );
  }
}
