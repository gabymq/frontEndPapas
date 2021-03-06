export interface IPaging {
  count: number;
  page: number;
  per_page: number;
  prev?: string;
  next?: string;
}

export interface IPagedRes<T= any> {
  success: boolean;
  message: string;
  data:  T[];
  paging: IPaging;
}

export interface IRes<T= any> {
  success: boolean;
  message: string;
  data: T ;
}

export interface ICampo {
  name: string;
  description?: string;
  surface: number;
  location: [number, number];
  variedad_id: string;
}

export interface IEvento {
  name: string;
  description: string;
  campo_id: string;
}

export interface ILote {
  arpillas: number;
  peso: number;
  destinatario: string;
  campo_id: string;
}

export interface IVariedad {
  id?: string;
  name: string;
  description: string;
}
