import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from '../Models/Ui-Models/StudentUI';
import { StudentService } from './student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private StudentService:StudentService) { }

  public students:Student[]=[];
  displayedColumns: string[] = ['id','firstName', 'lastName', 'doB', 'emailid',
  'mobileNo','gender'];
  datasource:MatTableDataSource<Student>=new MatTableDataSource<Student>();

  ngOnInit(): void {

    // fetch the All Students
this.StudentService.GetStudent()
.subscribe( 
  (successresponse)=>
{
this.students=successresponse;
 // console.log(successresponse[0].gender);
 // console.log(successresponse[0].lastName);
 this.datasource=new MatTableDataSource<Student>(this.students);
},
(errorresponse)=>
{
  console.log(errorresponse);
}
);
  }

}
