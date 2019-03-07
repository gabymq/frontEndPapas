import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from '../config/backend';
import { IVariedad, IRes, IPagedRes } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class VariedadesService {

  private apiUrl = API_URL;

  constructor(private http: HttpClient) { }

  postVariedades(args: IVariedad) {
    const url = `${this.apiUrl}variedades`;

    return this.http.post(url, args).pipe(
      map((res: IRes<IVariedad>) => res.data)
    );
  }

  getVariedades(params: any = {}) {
    const url = `${this.apiUrl}variedades`;

    return this.http.get(url).pipe(
      map((res: IPagedRes<IVariedad>) => res.data)
    );
  }

  getVariedad( id: string) {
    const url = `${this.apiUrl}variedades/${id}`;

    return this.http.get(url).pipe(
      map((res: IRes<IVariedad>) => res.data)
    );
  }

  putVariedades(id: string, body: IVariedad) {
    const url = `${this.apiUrl}variedades/${id}`;

    return this.http.put(url, body).pipe(
      map((res: IRes<IVariedad>) => res.data )
    );
  }

  deleteVariedad(id: string) {
    const url = `${this.apiUrl}variedades/${id}`;

    return this.http.delete(url).pipe(
      map((res: IRes<IVariedad>) => res.data )
    );
  }
}
