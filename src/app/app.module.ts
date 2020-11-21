import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { registerReducer } from './Register_user/store/register-reducer';
import { RegisterEffects } from './Register_user/store/register-effects';
import { UserEffects } from './Login_user/store/login-effects';
import { userReducer } from './Login_user/store/login-reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeService } from './services/theme.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({user: userReducer, register: registerReducer}),
    EffectsModule.forRoot([UserEffects, RegisterEffects]),
    BrowserAnimationsModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
