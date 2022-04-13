import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../Models/api-models/studentModels';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

 private baseUrl='https://localhost:44391';


  constructor( private Httpclient:HttpClient) {  }

  GetStudent():Observable<Student[]>
  {
    return this.Httpclient.get<Student[]>(this.baseUrl+'/student');
  }
  GetStudentDetails(id:string):Observable<Student>
  {
    return this.Httpclient.get<Student>(this.baseUrl+'/student/'+id);
  }
}
