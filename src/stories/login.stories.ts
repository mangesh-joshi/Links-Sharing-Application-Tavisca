import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { provideMockStore } from '@ngrx/store/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginRoutingModule } from '../app/Login_user/login-routing.module';
import { LoginComponent } from '../app/Login_user/login/login.component';


export default {
  title: 'Login Component',
  component: LoginComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        CommonModule,
        LoginRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [
        provideMockStore()
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }),
  ],
} as Meta;

const Template: Story<LoginComponent> = (args: LoginComponent) => ({
  component: LoginComponent,
  props: args
});

export const login = Template.bind({});

export const LoginError = Template.bind({});

LoginError.args = {
    submitted: true
}
