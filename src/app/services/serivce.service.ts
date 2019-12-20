import { Injectable } from '@angular/core';
import { SettingsService } from "./settings.service";
import { HttpClient } from "@angular/common/http";

import { map } from 'rxjs/operators';
import { Player } from "../interfaces/player";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SerivceService {

  apiUrl: string;

  constructor(private http: HttpClient, private settings: SettingsService) { 
    this.apiUrl = settings.getUrl();
  }

  getTable() : Observable<Player[]> {
    console.log("settings works");
    const ep = this.apiUrl + "players";
    return this.http.get(ep).pipe(map((response => {
      console.log(response);
      return <Player[]> response
    })));        
    
  }
}
