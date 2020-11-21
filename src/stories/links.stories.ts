import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LinksComponent } from '../app/links/links.component';
import { AddNewLinkComponent } from '../app/links/add-new-link/add-new-link.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes } from '@angular/router';
import { LinksService } from '../app/services/links.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


const routes: Routes = [
    { path: '', component: LinksComponent },
    { path: 'link-actions', component: AddNewLinkComponent }
];

const linksList = [
    {
        id: 1,
        title: "Google",
        postby: "XYZ",
        website: "www.google.com",
        date: "4 January 2020"
      },
      {
        id: 2,
        title: "MDN",
        postby: "ABC",
        website: "https://developer.mozilla.org/en-US",
        date: "12 January 1994"
      }
];

export default {
    title: 'Links component',
    component: LinksComponent,
} as Meta;

const Template: Story<LinksComponent> = (args: LinksComponent) => ({
    component: LinksComponent,
    templateUrl: '../app/links/links.component.html',
    styleUrls: ['../app/links/links.component.scss'],
    moduleMetadata: {
        declarations: [LinksComponent, AddNewLinkComponent],
        imports: [
          CommonModule,
          HttpClientModule,
          FormsModule,
          ReactiveFormsModule,
          RouterTestingModule
        ],
        providers: [LinksService],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    },
    props: { args, links$: linksList },
});

export const Default = Template.bind({});



