import { createSelector, createFeatureSelector } from '@ngrx/store';
import { LinkState, selectAll } from './links-reducer';

export const linksFeatureSelector = createFeatureSelector<LinkState>('links');

// Get all links list
export const getAllLinksList = createSelector(
  linksFeatureSelector,
  selectAll
);

// Get all links list
export const getLinkDetails = createSelector(
  linksFeatureSelector,
  selectAll
);

// Get id of current link
export const getCurrentLinkId = createSelector(
    linksFeatureSelector,
    (state: LinkState) => state.selectedLinkId
);
