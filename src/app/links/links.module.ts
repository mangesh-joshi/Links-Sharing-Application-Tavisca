import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LinksComponent } from './links.component';
import { LinkRoutingModule } from './links-routing.module';
import { LinksService } from '../services/links.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LinkEffects } from './store/links-effects';
import { linkReducer } from './store/links-reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddNewLinkComponent } from './add-new-link/add-new-link.component';


@NgModule({
  declarations: [LinksComponent, AddNewLinkComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LinkRoutingModule,
    StoreModule.forFeature('links', linkReducer),
    EffectsModule.forFeature([LinkEffects])
  ],
  providers: [LinksService],
  bootstrap: [],
  exports: [LinksComponent, AddNewLinkComponent]
})

export class LinksModule { }
