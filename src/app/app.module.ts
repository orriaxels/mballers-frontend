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
import { Routes } from '@angular/router';

// Material
import { MatSliderModule, MatTableModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// // Routes
// const routes: Routes = [
//   {path: "", redirectTo: 'table', pathMatch: 'full'},
//   {path: "table", component: TableComponent},
//   {path: "players/:id", component: PlayersDetailComponent}
// ]

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TestingComponent,
    PlayersDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    MatTableModule,
    MatSliderModule,
    HttpClientModule, 
    BrowserAnimationsModule,
    FlexLayoutModule,
    NgbModule
  ],
  providers: [
    PlayerService,
    SettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
