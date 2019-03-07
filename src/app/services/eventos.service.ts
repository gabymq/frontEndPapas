import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IEvento, IRes } from '../interface';
import { API_URL } from '../config/backend';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  private apiUrl = API_URL;

  constructor(private http: HttpClient) { }

  postEvento(args: IEvento) {
    const url = `${this.apiUrl}eventos`;

    return this.http.post(url, args).pipe(
      map((res: IRes<IEvento>) => res.data)
    );
  }

  getEventos(params: any = {}) {
    const url = `${this.apiUrl}eventos`;

    return this.http.get(url).pipe(
      map((res: IRes<IEvento>) => res.data)
    );
  }

  getEvento(id: string ) {
    const url = `${this.apiUrl}eventos/${id}`;

    return this.http.get(url).pipe(
      map((res: IRes<IEvento>) => res.data)
    );
  }

  putEvento(id: string, body: IEvento) {
    const url = `${this.apiUrl}eventos/${id}`;

    return this.http.put(url, body).pipe(
      map((res: IRes<IEvento>) => res.data)
    );

  }

}
