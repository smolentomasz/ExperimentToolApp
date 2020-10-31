import { act } from '@ngrx/effects';
import { Action, createReducer, State } from '@ngrx/store';

export interface Test{
    isWorking: boolean;
}
export const testFeatureKey = 'test';
export const initialState: Test = {
    isWorking : true
};
const testReducer = createReducer(initialState);

export function reducer(state: Test | undefined, action: Action): Test{
    return  testReducer(state, action);
}