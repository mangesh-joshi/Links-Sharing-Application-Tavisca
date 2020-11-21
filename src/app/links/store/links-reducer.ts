import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Link } from '../../models/link';
import { linkActionTypes } from './links-actions';

export interface LinkState extends EntityState<Link> {
  linksLoaded: boolean;
  selectedLinkId: number;
}

export const adapter: EntityAdapter<Link> = createEntityAdapter<Link>();

// set link inital state
export const initialState = adapter.getInitialState({
  linksLoaded: false,
  selectedLinkId: null
});

export const linkReducer = createReducer(
  initialState,

  // links loaded reducer
  on(linkActionTypes.linksLoaded, (state, action) => {
    return adapter.setAll(
      action.links,
      {...state, linksLoaded: true}
    );
  }),

  // link loaded reducer
  on(linkActionTypes.linkLoaded, (state, action) => {
    return adapter.setAll(
      action.link,
      {...state, linkLoaded: true}
    );
  }),

  // add link reducer
  on(linkActionTypes.addLink, (state, action) => {
    return adapter.addOne(action.link, state);
  }),

  // delete link reducer
  on(linkActionTypes.deleteLink, (state, action) => {
    return adapter.removeOne(action.linkId, state);
  }),

  // update link reducer
  on(linkActionTypes.updateLink, (state, action) => {
    return adapter.updateOne(action.update, state);
  })
);

export const { selectAll, selectEntities } = adapter.getSelectors();
