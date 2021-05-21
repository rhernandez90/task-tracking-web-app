export class TaskDto {
    id : number;
    taskName : string;
    description :string;
    status : number;
    startDate : Date;
    endDate : Date;
    completeDate : Date;
    note : string;
    projectId : number;
    projectName : string;
}