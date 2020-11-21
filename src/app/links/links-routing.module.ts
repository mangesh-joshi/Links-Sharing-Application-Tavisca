import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinksComponent } from './links.component';
import { AddNewLinkComponent } from './add-new-link/add-new-link.component';
import { AuthguardService } from '../services/authguard.service';

const routes: Routes = [
  { path: '', component: LinksComponent },
  { path: 'add-new-link', component: AddNewLinkComponent, canActivate: [AuthguardService] },
  { path: 'add-new-link/:id', component: AddNewLinkComponent, canActivate: [AuthguardService] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LinkRoutingModule { }
