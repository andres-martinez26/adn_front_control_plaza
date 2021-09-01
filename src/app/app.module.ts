import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlquilerModule } from './feature/alquiler/alquiler.module';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from '@core/components/home/home.component';
import { CoreModule } from '@core/core.module';
import { CookieService } from 'ngx-cookie-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    AlquilerModule,
    MaterialModule
  ],
  exports: [MaterialModule],
  providers: [CookieService],
    bootstrap: [AppComponent]
})
export class AppModule { }
