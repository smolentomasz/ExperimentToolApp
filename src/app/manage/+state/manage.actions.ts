import { createAction, props } from '@ngrx/store';
import { ResponseMessage } from './manage.model';

const addMaterialButtonClicked = createAction(
  '[Manage] Add material button clicked',
  props<{materialForm: FormData}>()
);
const addMaterialSuccess = createAction(
    '[Manage] Add material succes',
    props<{responseMessage: ResponseMessage}>()
);


export const ManageActions = {
  addMaterialButtonClicked,
  addMaterialSuccess
};
