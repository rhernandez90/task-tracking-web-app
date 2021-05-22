export class TaskDto {
    id : number;
    taskName : string;
    description :string;
    status : number;
    startDate : string;
    endDate : string;
    completeDate : Date;
    note : string;
    projectId : number;
    projectName : string;
    assignedPerson :  number;
}