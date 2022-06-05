import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  postCoso(data: any) {
    return this.http.post<any>('http://localhost:4040/coSo/', data, {
      withCredentials: true,
    });
  }

  getCoso() {
    return this.http.get<any>('http://localhost:4040/coSo/', {
      withCredentials: true,
    });
  }

  putCoso(data: any, id: number) {
    return this.http.put<any>('http://localhost:4040/coSo/' + id, data, {
      withCredentials: true,
    });
  }

  deleteCoso(id: number) {
    return this.http.delete<any>('http://localhost:4040/coSo/' + id, {
      withCredentials: true,
    });
  }

  postThanhTra(data: any) {
    return this.http.post<any>('http://localhost:4040/thanhTra/', data, {
      withCredentials: true,
    });
  }

  getThanhTra() {
    return this.http.get<any>('http://localhost:4040/thanhTra/', {
      withCredentials: true,
    });
  }

  putThanhTra(data: any, id: number) {
    return this.http.put<any>('http://localhost:4040/thanhTra/' + id, data, {
      withCredentials: true,
    });
  }

  deleteThanhTra(id: number) {
    return this.http.delete<any>('http://localhost:4040/thanhTra/' + id, {
      withCredentials: true,
    });
  }
}
