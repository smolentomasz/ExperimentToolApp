import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Material, CompressionTest, TensileTest, ResponseMessage, AdditionalFile } from './manage.model';

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
  private compressionTestUrl: string;
  private tensileTestUrl: string;
  private compressionResultUrl: string;
  private tensileResultUrl: string;
  private additionalFileUrl: string;
  private textureUrl: string;

  constructor(private http: HttpClient) { 
    this.materialUrl = basicUrl + 'materials';
    this.compressionTestUrl = basicUrl + 'compression-tests';
    this.tensileTestUrl = basicUrl + 'tensile-tests';
    this.compressionResultUrl = basicUrl + 'compression-results';
    this.tensileResultUrl = basicUrl + 'tensile-results';
    this.additionalFileUrl = basicUrl + 'additional-files';
    this.textureUrl = basicUrl + 'analyses';
  }
  addNewMaterial(newData: FormData): Observable<ResponseMessage>{
    authenticationHeader.headers = authenticationHeader.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.post<ResponseMessage>(this.materialUrl, newData, authenticationHeader);
  }
  addNewCompressionTest(newCompressionTest: CompressionTest): Observable<ResponseMessage>{
    authenticationHeader.headers = authenticationHeader.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.post<ResponseMessage>(this.compressionTestUrl, newCompressionTest, authenticationHeader);
  }
  addNewTensileTest(newTensileTest: TensileTest): Observable<ResponseMessage>{
    authenticationHeader.headers = authenticationHeader.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.post<ResponseMessage>(this.tensileTestUrl, newTensileTest, authenticationHeader);
  }
  addNewCompressionTestResults(newData: FormData): Observable<ResponseMessage>{
    authenticationHeader.headers = authenticationHeader.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.post<ResponseMessage>(this.compressionResultUrl, newData, authenticationHeader);
  }
  addNewTensileTestResults(newData: FormData): Observable<ResponseMessage>{
    authenticationHeader.headers = authenticationHeader.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.post<ResponseMessage>(this.tensileResultUrl, newData, authenticationHeader);
  }
  addNewAdditionalFile(newData: FormData): Observable<ResponseMessage>{
    authenticationHeader.headers = authenticationHeader.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.post<ResponseMessage>(this.additionalFileUrl, newData, authenticationHeader);
  }
  addNewTexture(newData: FormData): Observable<ResponseMessage>{
    authenticationHeader.headers = authenticationHeader.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.post<ResponseMessage>(this.textureUrl, newData, authenticationHeader);
  }
  getFileFromBackend(fileId: number): Observable<any>{
    authenticationHeader.headers = authenticationHeader.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get<any>(this.additionalFileUrl + '/id/' + fileId,  authenticationHeader);
  }
  getAllMaterials(): Observable<Material[]>{
    return this.http.get<Material[]>(this.materialUrl);
  }
  getAllCompressionTests(): Observable<CompressionTest[]>{
    return this.http.get<CompressionTest[]>(this.compressionTestUrl);
  }
  getAllTensileTests(): Observable<TensileTest[]>{
    return this.http.get<TensileTest[]>(this.tensileTestUrl);
  }
  getAllAdditionalFiles(): Observable<AdditionalFile[]>{
    return this.http.get<AdditionalFile[]>(this.additionalFileUrl);
  }
}
