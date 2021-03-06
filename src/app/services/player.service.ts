import { Injectable } from '@angular/core';
import { SettingsService } from "./settings.service";
import { HttpClient } from "@angular/common/http";

import { map } from 'rxjs/operators';
import { Player } from "../interfaces/player";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  apiUrl: string;

  constructor(private http: HttpClient, private settings: SettingsService) { 
    this.apiUrl = settings.getUrl();
  }

  getTable() : Observable<Player[]> {
    const ep = this.apiUrl + "players";
    return this.http.get<Player[]>(ep).pipe(map(response => 
      response.sort((a1: Player, a2: Player) => a2.wins - a1.wins)    
    ));            
  }

  getPlayerById(id) {
    const ep = this.apiUrl + "players/" + id;
    console.log("ep" + ep);
    return this.http.get(ep).pipe(map((response => {
      return <Player> response
    })));
  }
}
