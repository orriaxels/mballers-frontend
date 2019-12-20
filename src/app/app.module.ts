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
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Routes
const routes: Routes = [
  {path: "", redirectTo: 'table', pathMatch: 'full'},
  {path: "table", component: TableComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TestingComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,    
    RouterModule.forRoot(routes),

    HttpClientModule, BrowserAnimationsModule
  ],
  providers: [
    SerivceService,
    SettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
