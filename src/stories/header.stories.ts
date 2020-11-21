import { moduleMetadata } from '@storybook/angular';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { HeaderComponent } from '../app/header/header.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UserEffects } from '../app/Login_user/store/login-effects';
import { userReducer } from '../app/Login_user/store/login-reducer';
import { RegisterEffects } from '../app/Register_user/store/register-effects';
import { registerReducer } from '../app/Register_user/store/register-reducer';

export default {
  title: 'Header Component',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      declarations: [HeaderComponent],
      imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        HttpClientModule,
        StoreModule.forRoot({user: userReducer, register: registerReducer}),
        EffectsModule.forRoot([UserEffects, RegisterEffects]),
      ],
      providers: [
        provideMockStore(),
        {provide: APP_BASE_HREF, useValue: '/'}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }),
  ],
} as Meta;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  component: HeaderComponent,
  props: args
});

export const Default = Template.bind({});

