import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ICampo, IRes, IPagedRes } from '../interface';
import { API_URL } from '../config/backend';

@Injectable({
  providedIn: 'root'
})
export class CamposService {
  private apiUrl = API_URL;

  constructor(private http: HttpClient) { }

  postCampo(args: ICampo) {
    const url = `${this.apiUrl}campos`;

    return this.http.post(url, args).pipe(
      map((res: IRes<ICampo>) => res.data)
    );
  }

  getCampos(params: any = {}) {
    const url = `${this.apiUrl}campos`;

    return this.http.get(url).pipe(
      map((res: IPagedRes<ICampo>) => res.data)
    );
  }

  getCampo(id: string) {
    const url = `${this.apiUrl}campos/${id}`;

    return this.http.get(url).pipe(
      map((res: IRes<ICampo>) => res.data)
    );
  }

  putCampo(id: string, body: ICampo) {
    const url = `${this.apiUrl}campos/${id}`;

    return this.http.put(url, body).pipe(
      map((res: IRes<ICampo>) => res.data)
    );
  }

  deleteCampo(id: string) {
    const url = `${this.apiUrl}campos/${id}`;

    return this.http.delete(url).pipe(
      map((res: IRes<ICampo>) => res.data)
    );
  }
}
