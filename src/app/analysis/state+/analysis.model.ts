import { Material } from 'src/app/manage/+state/manage.model';

export interface Texture{
    materialId: number;
    material: Material;
    ebsdPhoto: string;
    ebsdDescription: string;
  }