import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";

// Services
import { PlayerService } from "./services/player.service";
import { SettingsService } from "./services/settings.service";

// Components
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { TestingComponent } from './components/testing/testing.component';
import { PlayersDetailComponent } from './components/players-detail/players-detail.component';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Routes
const routes: Routes = [
  {path: "", redirectTo: 'table', pathMatch: 'full'},
  {path: "table", component: TableComponent},
  {path: "players/:id", component: PlayersDetailComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TestingComponent,
    PlayersDetailComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,    
    RouterModule.forRoot(routes),

    HttpClientModule, BrowserAnimationsModule
  ],
  providers: [
    PlayerService,
    SettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
