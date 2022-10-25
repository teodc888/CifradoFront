import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CifradoService {
  private url = 'https://cifrar-back.herokuapp.com/api/Encriptamiento';

  constructor(private http: HttpClient) {}

  getEncriptado(encriptar: string): Observable<any> {
    return this.http.get(this.url + '/encriptar', {
      headers: { "encriptado": encriptar },
    });
  }

  getDesEncriptado(desEncriptado: string): Observable<any> {
    return this.http.get(this.url + '/desencriptar', {
      headers: { "encriptado": desEncriptado },
    });
  }
}
