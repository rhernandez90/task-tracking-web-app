import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../../../Services/Project/project.service';

@Component({
  selector: 'ngx-add-project-modal',
  templateUrl: './add-project-modal.component.html',
  styleUrls: ['./add-project-modal.component.scss']
})
export class AddProjectModalComponent implements OnInit {

  projectForm: any = {
    name: null,
    description: null
  };

  constructor(
    private _projectService : ProjectService,
    private router : Router
  ) 
  { 

  }

  ngOnInit(): void {
  }

  onSubmit() : void {
    this._projectService.Create(this.projectForm).subscribe(res => {
      this.router.navigate(['/pages/project-dashboard']);
    })
  }

}
