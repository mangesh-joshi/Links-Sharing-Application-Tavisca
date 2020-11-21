import { Routes, RouterModule } from '@angular/router';

const loginModule = () => import('./Login_user/login.module').then(x => x.LoginModule);
const registerModule = () => import('./Register_user/register.module').then(x => x.RegisterModule);
const linksModule = () => import('./links/links.module').then(x => x.LinksModule);

const routes: Routes = [
  { path: 'login', loadChildren: loginModule },
  { path: 'register', loadChildren: registerModule },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', loadChildren: linksModule }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
