import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { PersonDto } from '../../../Services/Person/Dto/PersonDto';
import { PersonService } from '../../../Services/Person/person.service';
import { TaskDto } from '../../../Services/Tasks/Dto/TasksDto';
import { TaskService } from '../../../Services/Tasks/task.service';

@Component({
  selector: 'ngx-task-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditTaskComponent implements OnInit {


  TaskForm: TaskDto;
  persons : Array<PersonDto> = [];
  

  constructor(
    public bsModalRef: BsModalRef,
    public _taskService : TaskService,
    private _personService : PersonService
    ) {

     }

  ngOnInit(): void {
    this.loadPersons();
  }

  loadPersons(){
    this._personService.GetlAll().subscribe( res =>{
      let person = new PersonDto();
      this.persons.push(person);
      this.persons = this.persons.concat(res.data);
    })
  }


  onSubmit(){
    
    
    this._taskService.Create(this.TaskForm).subscribe( res => {
      this.bsModalRef.hide();
    });

  }

}
