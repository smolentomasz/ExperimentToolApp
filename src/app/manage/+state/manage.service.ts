import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Material, CompressionTest, TensileTest, ResponseMessage } from './manage.model';

const authenticationHeader = {
  headers: new HttpHeaders({
    authorization: ''
  })
};
const basicUrl = 'https://localhost:5001/tool/';
@Injectable({
  providedIn: 'root'
})
export class ManageService {
  private materialUrl: string;
  private compressionUrl: string;
  private tensileUrl: string;

  constructor(private http: HttpClient) { 
    this.materialUrl = basicUrl + 'materials';
    this.compressionUrl = basicUrl + 'compression-tests';
    this.tensileUrl = basicUrl + 'tensile-tests';
  }
  addNewMaterial(newData: FormData): Observable<ResponseMessage>{
    authenticationHeader.headers = authenticationHeader.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.post<ResponseMessage>(this.materialUrl, newData, authenticationHeader);
  }
  addNewCompressionTest(newCompressionTest: CompressionTest): Observable<ResponseMessage>{
    authenticationHeader.headers = authenticationHeader.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.post<ResponseMessage>(this.compressionUrl, newCompressionTest, authenticationHeader);
  }
  addNewTensileTest(newTensileTest: TensileTest): Observable<ResponseMessage>{
    authenticationHeader.headers = authenticationHeader.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.post<ResponseMessage>(this.tensileUrl, newTensileTest, authenticationHeader);
  }
  getAllMaterials(): Observable<Material[]>{
    return this.http.get<Material[]>(this.materialUrl);
  }
  getAllCompressionTests(): Observable<CompressionTest[]>{
    return this.http.get<CompressionTest[]>(this.compressionUrl);
  }
  getAllTensileTests(): Observable<TensileTest[]>{
    return this.http.get<TensileTest[]>(this.tensileUrl);
  }
}
