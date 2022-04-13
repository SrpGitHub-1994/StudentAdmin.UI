import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { gender } from 'src/app/Models/Ui-Models/GenderUI';
import { Student } from 'src/app/Models/Ui-Models/StudentUI';
import { GenderserviceService } from 'src/app/services/genderservice.service';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {
studentId:string|null|undefined
student:Student={
  id: '',
  firstName: '',
  lastName: '',
  doB: '1989-06-11T00:00:00',
  emailid: 'Santos.Valencia@gmaill.com',
  mobileNo: 91254684826,
  profileImg: '',
  genderid: '',
  gender: {
  id: '',
  description: ''
  },
  address: {
  id: '',
  physicalAddress: '',
  postalAddress: ''
  }
}
public genderList:gender[]=[];

  constructor(private readonly studentService:StudentService,
    private readonly rout:ActivatedRoute,private readonly gendersrvice:GenderserviceService) { }

  ngOnInit(): void {
    this.rout.paramMap.subscribe(
      (param)=>{
        this.studentId=param.get('Id');

        if(this.studentId)
        {
          this.studentService.GetStudentDetails(this.studentId)
          .subscribe(
            (successresponse)=>{
             this.student=successresponse;
            }
          );

          this.gendersrvice.getGenderList().subscribe(
            (successresponse)=>{
              this.genderList=successresponse;
            }
          );
        }
      }
    );
  }

}
