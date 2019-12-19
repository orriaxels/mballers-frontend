import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";


// Services
import { SerivceService } from "./services/serivce.service";
import { SettingsService } from "./services/settings.service";

// Components
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { TestingComponent } from './components/testing/testing.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TestingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    HttpClientModule
  ],
  providers: [
    SerivceService,
    SettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
