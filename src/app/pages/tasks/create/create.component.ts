import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { TaskDto } from '../../../Services/Tasks/Dto/TasksDto';
import { TaskService } from '../../../Services/Tasks/task.service';

@Component({
  selector: 'ngx-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateTaskComponent implements OnInit {

  TaskForm: TaskDto;

  

  constructor(
    public bsModalRef: BsModalRef,
    public _taskService : TaskService
    ) {

     }

  ngOnInit(): void {
   
    this.TaskForm.startDate = new Date();
    this.TaskForm.endDate = new Date();
  }



  onSubmit(){
    this._taskService.Create(this.TaskForm).subscribe( res => {
      this.bsModalRef.hide();
    });
  }
}
