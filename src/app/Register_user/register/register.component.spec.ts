import { TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from '../register-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { registerReducer } from '../store/register-reducer';
import * as registerReducers from '../store/register-reducer';
import { register } from '../store/register-actions';
import { RegisterUser } from '../../models/register';

describe('RegisterComponent', () => {
  let component: any;
  let fixture: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [
        CommonModule,
        RegisterRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [provideMockStore()]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [RegisterComponent]
    });

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should return the default state', () => {
    const action = {} as any;

    const result = registerReducer(undefined, action);
    expect(result).toEqual(registerReducers.initialState);
  });

  describe('duplicate register  payload', () => {
    it('should NOT register a user', () => {
      const user = { firstname: 'mangesh', lastname: 'joshi', email: 'mang@gmail.com', password: 'mangesh@123' } as RegisterUser;
      const createAction = register({user});
      const result = registerReducer(registerReducers.initialState, createAction);

      const expectedResult = {
        isRegistered: false,
        token : null,
        message: null,
        user: result.user
      };

      expect(result).toEqual(expectedResult);
    });
  });
});

