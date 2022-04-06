import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
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

  @ViewChild(MatPaginator) matpaginator!:MatPaginator;
  @ViewChild(MatSort) matsrt!:MatSort;
  filterstring='';
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

 if(this.matpaginator)
 {
   this.datasource.paginator=this.matpaginator;
 }

 if(this.matsrt)
 {
   this.datasource.sort=this.matsrt;
 }

},
(errorresponse)=>
{
  console.log(errorresponse);
}
);
  }

FilterStudent()
{
this.datasource.filter=this.filterstring.trim().toLowerCase();
}

}
