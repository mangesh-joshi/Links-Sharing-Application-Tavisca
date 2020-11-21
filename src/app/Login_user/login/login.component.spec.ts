import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from '../login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import * as loginReducers from '../store/login-reducer';
import { userReducer } from '../store/login-reducer';
import { User } from 'src/app/models/login';
import { login } from '../store/login-actions';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        CommonModule,
        LoginRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [provideMockStore()]
    })
    .compileComponents();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should return the default state', () => {
    const action = {} as any;

    const result = userReducer(undefined, action);
    expect(result).toEqual(loginReducers.initialState);
  });

  describe('wrong login payload', () => {
    it('should NOT authenticate a user', () => {
      const user = { email: 'someUserEmail', password: 'test' } as User;
      const createAction = login({user});

      const expectedResult = loginReducers.initialState;

      const result = userReducer(loginReducers.initialState, createAction);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('LOGIN', () => {
    it('should match login expected state', () => {
      const user = { email: 'mang@gmail.com', password: 'mangesh@123' } as User;
      const createAction = login({user});
      const loginResult = userReducer(loginReducers.initialState, createAction);

      const expectedResult = {
        isAuthenticated: false,
        loginToken : null,
        message: null
      };

      expect(loginResult).toEqual(expectedResult);
    });
  });

});
