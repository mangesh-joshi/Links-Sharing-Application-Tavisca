import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RegisterState } from './register-reducer';

export const getRegisterReferenceState = createFeatureSelector<RegisterState>('register');

// Get Register State
export const registerSelector = createSelector(getRegisterReferenceState, state => state);
