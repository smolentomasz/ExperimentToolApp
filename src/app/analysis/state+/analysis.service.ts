import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecordRequest, Texture } from './analysis.model';
import { keyBy } from 'lodash';
import { ResearchType } from 'src/app/manage/+state/manage.model';

const authenticationHeader = {
  headers: new HttpHeaders({
    authorization: '',
  }),
};

const basicUrl = 'https://localhost:5001/tool/';
@Injectable({
  providedIn: 'root',
})
export class AnalysisService {
  private textureUrl: string;
  private tensileResultUrl: string;
  private compressionResultUrl: string;

  constructor(private http: HttpClient) {
    this.textureUrl = basicUrl + 'analyses';
    this.tensileResultUrl = basicUrl + 'tensile-results';
    this.compressionResultUrl = basicUrl + 'compression-results';
  }
  getAllTextures(): Observable<Texture[]> {
    return this.http.get<Texture[]>(this.textureUrl);
  }
  getAllAttemptsForTensileTestId(testId: number): Observable<number[]> {
    return this.http.get<number[]>(this.tensileResultUrl + '/' + testId);
  }
  getAllAttemptsForCompressionTestId(testId: number): Observable<number[]> {
    return this.http.get<number[]>(this.compressionResultUrl + '/' + testId);
  }
  getResultsOfAttempt(
    recordsList: FormData,
    researchType: ResearchType
  ): Observable<any[]> {
    let finalUrl: string;

    if (researchType === ResearchType.TENSILE) {
      finalUrl = this.tensileResultUrl;
    } else {
      finalUrl = this.compressionResultUrl;
    }
    return this.http.post<any[]>(finalUrl + '/' + 'getResults', recordsList);
  }
}
