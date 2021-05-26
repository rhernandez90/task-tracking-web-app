import { Component, isDevMode, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  getBaseUrl(): string {
    if (isDevMode()) {
        return  "https://localhost:44308";  // "http://localhost:3000/api"; //appConfig.localBaseUrl;
    }
    else {
        
        return "http://taskapp-api.azurewebsites.net"; 
    }
}


}
