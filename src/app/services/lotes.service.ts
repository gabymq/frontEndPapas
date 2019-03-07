import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ILote, IRes } from '../interface';
import { API_URL } from '../config/backend';

@Injectable({
  providedIn: 'root'
})
export class LotesService {
  private apiUrl = API_URL;



  constructor(private http: HttpClient) { }

  postLote(args: ILote) {
    const url = `${this.apiUrl}lotes`;

    return this.http.post(url, args).pipe(
      map((res: IRes<ILote>) => res.data)
    );
  }

  getLotes(params: any = {}) {
    const url = `${this.apiUrl}lotes`;

    return this.http.get(url).pipe(
      map((res: IRes<ILote>) => res.data)
    );
  }

  getLote(id: string) {
    const url = `${this.apiUrl}lotes/${id}`;

    return this.http.get(url).pipe(
      map((res: IRes<ILote>) => res.data)
    );
  }

  putLote(id: string, body: ILote) {
    const url = `${this.apiUrl}lotes/${id}`;

    return this.http.put(url, body).pipe(
      map((res: IRes<ILote>) => res.data)
    );
  }
}
