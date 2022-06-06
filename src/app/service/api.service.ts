import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public postUser(data: any) {
    return this.http.post<any>('http://localhost:4040/nguoiDung/', data, {
      withCredentials: true,
    });
  }

  public getUser() {
    return this.http.get<any>('http://localhost:4040/nguoiDung/', {
      withCredentials: true,
    });
  }

  public putUser(data: any, id: number) {
    return this.http.put<any>('http://localhost:4040/nguoiDung/' + id, data, {
      withCredentials: true,
    });
  }

  public deleteUser(id: number) {
    return this.http.delete<any>('http://localhost:4040/nguoiDung/' + id, {
      withCredentials: true,
    });
  }

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
