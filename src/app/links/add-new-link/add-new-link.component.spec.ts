import { TestBed } from '@angular/core/testing';
import { LinksComponent } from '../links.component';
import { APP_BASE_HREF, CommonModule, Location } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LinkRoutingModule } from '../links-routing.module';
import { StoreModule } from '@ngrx/store';
import { linkReducer } from '../store/links-reducer';
import { EffectsModule } from '@ngrx/effects';
import { LinkEffects } from '../store/links-effects';
import { AddNewLinkComponent } from '../add-new-link/add-new-link.component';
import { LinksService } from '../../services/links.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule  } from '@angular/router/testing';
import { Router, RouterModule, Routes } from '@angular/router';
import { UserEffects } from '../../Login_user/store/login-effects';
import { userReducer } from '../../Login_user/store/login-reducer';
import { RegisterEffects } from '../../Register_user/store/register-effects';
import { registerReducer } from '../../Register_user/store/register-reducer';

describe('LinkComponent', () => {
  let fixture: any;
  let app: any;
  let location: Location;
  let router: Router;

  const routes: Routes = [
    { path: '', component: LinksComponent },
    { path: 'link-actions', component: AddNewLinkComponent }
  ];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LinksComponent, AddNewLinkComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        LinkRoutingModule,
        RouterTestingModule.withRoutes([{ path: '', component: LinksComponent },
        { path: 'link-actions', component: AddNewLinkComponent }]),
        RouterModule.forChild(routes),
        StoreModule.forRoot({user: userReducer, register: registerReducer}),
        EffectsModule.forRoot([UserEffects, RegisterEffects]),
        StoreModule.forFeature('links', linkReducer),
        EffectsModule.forFeature([LinkEffects])
      ],
      providers: [
        LinksService,
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [LinksComponent, AddNewLinkComponent],
      providers: [LinksService]
    });

    fixture = TestBed.createComponent(AddNewLinkComponent);
    app = fixture.componentInstance;

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
  });

  it('should create', () => {
    expect(app).toBeTruthy();
  });

});


