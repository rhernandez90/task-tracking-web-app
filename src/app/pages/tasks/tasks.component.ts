import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../Services/Project/project.service';
import { SmartTableData } from '../../@core/data/smart-table';
import { LocalDataSource } from 'ng2-smart-table';
@Component({
  selector: 'ngx-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  project : number = 0;
  tasks : Array<any> = [];

  constructor(
    private _projectService : ProjectService,
    private route: ActivatedRoute,
  ) {

   }

  ngOnInit(): void {

    this.route.queryParams.subscribe((params) => {
      this.project  = params["id"];
      this.loadTasks(this.project)
    })


  }

  loadTasks(projectId : number){
    this._projectService.GetTasks(projectId).subscribe( res =>{
      this.tasks = res.data;
    })
  }



}