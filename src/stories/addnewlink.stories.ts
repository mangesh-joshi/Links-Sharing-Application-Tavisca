import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AddNewLinkComponent } from '../app/links/add-new-link/add-new-link.component';
import { LinksService } from '../app/services/links.service';



const linkList = {
    id: 1,
    title: 'JavaTpoint',
    postby: 'James',
    website: 'https://www.javatpoint.com/',
    date: '10 January 2020'
};

export default {
    title: 'Add New component',
    component: AddNewLinkComponent,
} as Meta;

const Template: Story<AddNewLinkComponent> = (args: AddNewLinkComponent) => ({
    component: AddNewLinkComponent,
    moduleMetadata: {
        declarations: [AddNewLinkComponent],
        imports: [
          CommonModule,
          HttpClientModule,
          FormsModule,
          ReactiveFormsModule,
          RouterTestingModule,
          StoreModule.forRoot({}),
          EffectsModule.forRoot([])
        ],
        providers: [LinksService],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    },
    props: args
});

export const add = Template.bind({});
add.args = {};

export const edit = Template.bind({});

edit.args = {
    id: '1',
    link: linkList,
    showAdd: false
};



