import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CompressionTest, ResearchType, TensileTest } from './manage.model';
import { manageFeatureKey, ManageState } from './manage.reducer';

const selectManage = createFeatureSelector<ManageState>(manageFeatureKey);

const selectManageState = createSelector(
  selectManage,
  (state: ManageState) => state
);

const selectMaterials = createSelector(
  selectManageState,
  (state: ManageState) => state.materials
);

const selectTensileTests = createSelector(
  selectManageState,
  (state: ManageState) => state.tensileTests
);

const selectCompressionTests = createSelector(
  selectManageState,
  (state: ManageState) => state.compressionTests
);
const selectAdditionalFiles = createSelector(
  selectManageState,
  (state: ManageState) => state.additionalFiles
);
const selectDownloadFile = createSelector(
  selectManageState,
  (state: ManageState) => state.file
);
const selectResearchesByResearchType = ({ type }: { type: ResearchType }) =>
  createSelector(
    selectTensileTests,
    selectCompressionTests,
    (tensileTests: TensileTest[], compressionTests: CompressionTest[]) =>
      type === ResearchType.TENSILE ? tensileTests : compressionTests
  );
export const ManageSelectors = {
  selectMaterials,
  selectResearchesByResearchType,
  selectAdditionalFiles,
  selectDownloadFile
};
