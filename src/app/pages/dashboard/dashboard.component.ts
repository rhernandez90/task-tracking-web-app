import {Component, OnDestroy, OnInit} from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators' ;
import { SolarData } from '../../@core/data/solar';
import { ProjectService } from '../../Services/Project/project.service';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnDestroy,OnInit {

  projects : Array<any> = [];

  constructor(
    private _projectService : ProjectService,
    private router : Router
  ) {


  }


  ngOnInit(): void {
    this._projectService.GetlAll().subscribe( res => {
      this.projects = res.data;
      console.log( res);
    })
  }

  goToTasks(id : number){
    let navigationExtras: NavigationExtras = {
			queryParams: {
				"id": id
			}
		};
    this.router.navigate(['/pages/tasks'], navigationExtras)
  }

  ngOnDestroy() {
    
  }
}
