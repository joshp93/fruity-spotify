import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { GetStartedComponent } from './components/get-started/get-started.component';
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';
import { MemoryStorageService } from './services/memory-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    GetStartedComponent,
    AuthComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MemoryStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
