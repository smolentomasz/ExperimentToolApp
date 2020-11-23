import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Texture } from './analysis.model';

const authenticationHeader = {
  headers: new HttpHeaders({
    authorization: ''
  })
};
const basicUrl = 'https://localhost:5001/tool/';
@Injectable({
  providedIn: 'root'
})
export class AnalysisService {
  private textureUrl: string;
  private tensileResultUrl: string;

  constructor(private http: HttpClient) { 
    this.textureUrl = basicUrl + 'analyses';
    this.tensileResultUrl = basicUrl + 'tensile-results';
  }
  getAllTextures(): Observable<Texture[]>{
    return this.http.get<Texture[]>(this.textureUrl);
  }
  getAllAttemptsForTestId(testId: number): Observable<number[]>{
    return this.http.get<number[]>(this.tensileResultUrl + "/" + testId);
  }
}
