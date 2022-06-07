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

  public putUser(data: any, username: string) {
    return this.http.put<any>('http://localhost:4040/nguoiDung/' + username, data, {
      withCredentials: true,
    });
  }

  public deleteUser(username: string) {
    return this.http.delete<any>('http://localhost:4040/nguoiDung/' + username, {
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

  postChungNhan(data: any) {
    return this.http.post<any>('http://localhost:4040/chungNhan/', data, {
      withCredentials: true,
    });
  }

  putChungNhan(data: any, id: number) {
    return this.http.put<any>('http://localhost:4040/chungNhan/' + id, data, {
      withCredentials: true,
    });
  }

  getChungNhan() {
    return this.http.get<any>('http://localhost:4040/chungNhan/', {
      withCredentials: true,
    });
  }

  deleteChungNhan(id: number) {
    return this.http.delete<any>('http://localhost:4040/chungNhan/' + id, {
      withCredentials: true,
    });
  }

  getHuyenQuan() {
    return this.http.get<any>('http://localhost:4040/huyenQuan/', {
      withCredentials: true,
    });
  }

  getXaPhuong() {
    return this.http.get<any>('http://localhost:4040/xaPhuong?pageSize=99', {
      withCredentials: true,
    });
  }
}
