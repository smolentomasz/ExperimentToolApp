import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseMessage } from './manage.model';

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
  private addMaterialUrl: string;

  constructor(private http: HttpClient) { 
    this.addMaterialUrl = basicUrl + 'materials';
  }
  addNewMaterial(newData: FormData): Observable<ResponseMessage>{
    authenticationHeader.headers = authenticationHeader.headers.set('Authorization', 'Bearer ' + localStorage.getItem('jwtToken'));
    return this.http.post<ResponseMessage>(this.addMaterialUrl, newData, authenticationHeader);
  }
}
