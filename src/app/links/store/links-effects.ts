import { createEffect, Actions, ofType } from '@ngrx/effects';
import { concatMap, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { linkActionTypes } from './links-actions';
import { LinksService } from '../../services/links.service';

@Injectable()
export class LinkEffects {
  constructor(private linkService: LinksService, private actions$: Actions, private router: Router) {}

  loadLinks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(linkActionTypes.loadLinks),
      concatMap(() => this.linkService.getLinks()),
      map(links => linkActionTypes.linksLoaded({links}))
    )
  );

  loadLink$ = createEffect(() =>
    this.actions$.pipe(
      ofType(linkActionTypes.loadLink),
      concatMap((action) => this.linkService.getLink(action.linkId)),
      map(link => linkActionTypes.linkLoaded({link: [link]}))
    )
  );

  addLink$ = createEffect(() =>
    this.actions$.pipe(
      ofType(linkActionTypes.addLink),
      concatMap((action) => this.linkService.addLink(action.link)),
      tap(() => this.router.navigateByUrl('/home'))
    ),
    {dispatch: false}
  );

  deleteLink$ = createEffect(() =>
    this.actions$.pipe(
      ofType(linkActionTypes.deleteLink),
      concatMap((action) => this.linkService.deleteLink(action.linkId))
    ),
    {dispatch: false}
  );

  updateLink$ = createEffect(() =>
    this.actions$.pipe(
      ofType(linkActionTypes.updateLink),
      concatMap((action) => this.linkService.updateLink(action.update.id, action.update.changes)),
      tap(() => this.router.navigateByUrl('/home'))
    ),
    {dispatch: false}
  );

  
}
