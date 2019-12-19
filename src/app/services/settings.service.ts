import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private apiUrl: string;

  constructor()
  { 
    this.apiUrl = "https://mballers.azurewebsites.net/api/";
  }

  public getUrl() {
    return this.apiUrl;
  }
}
