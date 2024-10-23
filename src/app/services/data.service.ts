import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // map operatörünü buradan içe aktarın

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataUrl = 'assets/data.json';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(this.dataUrl);
  }

  getHeaderMenu(): Observable<any[]> {
    // Dönüş tipini güncelle
    return this.http.get<any>(this.dataUrl).pipe(
      map((data) => data.HEADER.MENU) // Sadece HEADER.MENU'yu döndür
    );
  }
}
