import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  postCoso(data: any) {
    return this.http.post<any>('http://localhost:4040/api/v1/coSo/1/', data);
  }

  getCoso() {
    return this.http.get<any>('http://localhost:4040/api/v1/coSo/');
  }

  putCoso(data: any, id: number) {
    return this.http.put<any>('http://localhost:4040/api/v1/coSo/1' + id, data);
  }

  deleteCoso(id: number) {
    return this.http.delete<any>('http://localhost:4040/api/v1/coSo/1' + id);
  }

  postThanhTra(data: any) {
    return this.http.post<any>('http://localhost:4040/api/v1/thanhTra/1', data);
  }

  getThanhTra() {
    return this.http.get<any>('http://localhost:4040/api/v1/thanhTra/');
  }

  putThanhTra(data: any, id: number) {
    return this.http.put<any>(
      'http://localhost:4040/api/v1/thanhTra/1' + id,
      data
    );
  }

  deleteThanhTra(id: number) {
    return this.http.delete<any>(
      'http://localhost:4040/api/v1/thanhTra/1' + id
    );
  }
}
