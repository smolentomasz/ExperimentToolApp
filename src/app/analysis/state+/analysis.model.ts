import { CompressionTest, Material, TensileTest } from 'src/app/manage/+state/manage.model';

export interface Texture {
  materialId: number;
  material: Material;
  ebsdPhoto: string;
  ebsdDescription: string;
}
export interface AttemptRecord {
  testId: number;
  attempts: number[];
}
export interface RecordRequest{
  testId: number;
  attemptNumber: number;
}
export interface ResultsForAnalyse{
  attemptNumber: number;
  testResult: TensileTestResult[] | CompressionTestResult[];
}
export interface TensileTestResult{
  tensileTest: TensileTest;
  elongation: number;
  standardForce: number;
  trueStress: number;
  plasticElongation: number;
  xCorrectElongation: number;
}
export interface CompressionTestResult{
  compressionTest: CompressionTest;
  plasticRelativeReduction: number;
  relativeReduction: number;
  standardForce: number;
  xCorrectRelativeReduction: number;
}
export interface Series{
  name: number;
  value: number;
}
export interface Multi{
  name: string;
  series: Series[];
}
