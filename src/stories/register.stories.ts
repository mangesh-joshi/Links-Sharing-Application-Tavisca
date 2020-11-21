import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { provideMockStore } from '@ngrx/store/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisterComponent } from '../app/Register_user/register/register.component';
import { RegisterRoutingModule } from '../app/Register_user/register-routing.module';


export default {
  title: 'Register Component',
  component: RegisterComponent,
  decorators: [
    moduleMetadata({
      declarations: [RegisterComponent],
      imports: [
        CommonModule,
        RegisterRoutingModule,
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

const Template: Story<RegisterComponent> = (args: RegisterComponent) => ({
  component: RegisterComponent,
  props: args
});

export const register = Template.bind({});

export const RegisterError = Template.bind({});

RegisterError.args = {
    submitted: true
}

