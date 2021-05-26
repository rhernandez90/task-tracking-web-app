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
        return  "http://taskapp-api.azurewebsites.net"//"https://localhost:44308";
    }
    else {
        
        return "http://104.248.112.187:3000/api"; 
    }
}


}
