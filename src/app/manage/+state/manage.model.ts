export interface ResponseMessage {
  responseMessage: string;
}
export interface NewMaterial {
  name: string;
  informations: string;
  chemicalComposition: string;
}
export enum ResearchType {
  TENSILE = 'Tensile',
  COMPRESSION = 'Compression',
}
export interface Material {
  id: number;
  name: string;
  materialPhoto: string;
  additionalInformations: string;
  chemicalComposition: string;
}
export interface TensileTest {
  id: number;
  materialId: number;
  title: string;
  description: string;
  company: string;
  testStandard: string;
  machineInfo: string;
  initialForce: number;
  youngModuleSpeed: number;
  testSpeed: number;
}
export interface CompressionTest {
  id: number;
  materialId: number;
  title: string;
  description: string;
  testAuthor: string;
  machineInfo: string;
  initialForce: number;
  compressionModuleSpeed: number;
  yeldPointSpeed: number;
  testSpeed: number;
}
export interface NewResult {
  testId: number;
  attemptNumber: number;
}
export interface NewAdditionalFile{
  referenceType: string;
  referenceTypeName: string;
}
export interface AdditionalFile{
  id: number;
  name: string;
  referenceType: string;
  referenceTypeName: string;
}
export interface NewTexture{
  materialId: number;
  textureDescription: string;
}
export interface DownloadFileModel{
  fileContents: string;
  contentType: string;
  fileDownloadName: string;
}
