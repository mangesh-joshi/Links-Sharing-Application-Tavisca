import { moduleMetadata } from '@storybook/angular';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { HeaderComponent } from '../app/header/header.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from '../app/app.component';
import { RouterModule, Routes } from '@angular/router';
import { UserEffects } from '../app/Login_user/store/login-effects';
import { userReducer } from '../app/Login_user/store/login-reducer';
import { RegisterEffects } from '../app/Register_user/store/register-effects';
import { registerReducer } from '../app/Register_user/store/register-reducer';
import { ThemeService } from '../app/services/theme.service';
import { AppRoutingModule } from '../app/app-routing.module';

const loginModule = () => import('../app/Login_user/login.module').then(x => x.LoginModule);
const registerModule = () => import('../app/Register_user/register.module').then(x => x.RegisterModule);
const linksModule = () => import('../app/links/links.module').then(x => x.LinksModule);

const routes: Routes = [
    {
      path: 'login',
      loadChildren: loginModule
    },
    {
      path: 'register',
      loadChildren: registerModule
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      loadChildren: linksModule
    }
];

export default {
    title: 'App component',
    component: AppComponent,
} as Meta;

const Template: Story<AppComponent> = (args: AppComponent) => ({
    component: AppComponent,
    templateUrl: '../app/app.component.html',
    styleUrls: ['../app/app.component.scss'],
    moduleMetadata: {
        declarations: [
            AppComponent,
            HeaderComponent
        ],
        imports: [
            CommonModule,
            BrowserModule,
            AppRoutingModule,
            FormsModule,
            ReactiveFormsModule,
            HttpClientModule,
            RouterModule.forRoot([], { useHash: true }),
            StoreModule.forRoot({user: userReducer, register: registerReducer}),
            EffectsModule.forRoot([UserEffects, RegisterEffects]),
            BrowserAnimationsModule
        ],
        providers: [
            { provide: APP_BASE_HREF, useValue: '/' },
            ThemeService
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
    },
    props: { args },
});

export const Default = Template.bind({});


