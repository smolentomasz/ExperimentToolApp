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

const selectIsAdditionalFileAdding = createSelector(
  selectManageState,
  (state: ManageState) => state.isAdditionalFileAdding
)
const selectisFileDownloading = createSelector(
  selectManageState,
  (state: ManageState) => state.isFileDownloading
)
const selectisCompressionResultAdding = createSelector(
  selectManageState,
  (state: ManageState) => state.isCompressionResultAdding
)
const selectisCompressionTestAdding = createSelector(
  selectManageState,
  (state: ManageState) => state.isCompressionTestAdding
)
const selectisTensileResultAdding = createSelector(
  selectManageState,
  (state: ManageState) => state.isTensileResultAdding
)
const selectisTensileTestAdding = createSelector(
  selectManageState,
  (state: ManageState) => state.isTensileTestAdding
)
const selectisTextureAdding = createSelector(
  selectManageState,
  (state: ManageState) => state.isTextureAdding
)
const selectisMaterialAdding = createSelector(
  selectManageState,
  (state: ManageState) => state.isMaterialAdding
)

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
  selectDownloadFile,
  selectIsAdditionalFileAdding,
  selectisFileDownloading,
  selectisCompressionResultAdding,
  selectisCompressionTestAdding,
  selectisTensileResultAdding,
  selectisTensileTestAdding,
  selectisTextureAdding,
  selectisMaterialAdding
};
