import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Link } from '../../models/link';

export const loadLinks = createAction(
'[Links List] Load Links List via Service',
);

export const linksLoaded = createAction(
  '[Links Effect] Links Loaded Successfully',
  props<{links: Link[]}>()
);

export const loadLink = createAction(
  '[Link List] Link Link via Service',
  props<{linkId: string | number}>()
  );

export const linkLoaded = createAction(
  '[Link Effect] Link Loaded Successfully',
  props<{link: Link[]}>()
);

export const addLink = createAction(
  '[Add Link Component] Add Link',
  props<{link: Link}>()
);

export const deleteLink = createAction(
  '[Links List Operations] Delete Link',
  props<{linkId: number}>()
);

export const updateLink = createAction(
  '[Links List Operations] Update Link',
  props<{update: Update<Link>}>()
);

export const linkActionTypes = {
  loadLinks,
  linksLoaded,
  addLink,
  deleteLink,
  updateLink,
  loadLink,
  linkLoaded
};
