import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

// Services
import { PlayerService } from "./services/player.service";
import { SettingsService } from "./services/settings.service";

// Components
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { TestingComponent } from './components/testing/testing.component';
import { PlayersDetailComponent } from './components/players-detail/players-detail.component';

import { AppRoutingModule } from './app-routing.module';

// Material & Bootstrap
import { MatSliderModule, MatTableModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    { provide: 'windowObject', useValue: window},
    PlayerService,
    SettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
