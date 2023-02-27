import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './signin/signin.component';
import { FooterComponent } from './footer/footer.component';

import { NgxPopperModule } from 'ngx-popper';

import { FlexLayoutModule } from '@angular/flex-layout';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    SigninComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    NgxPopperModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }