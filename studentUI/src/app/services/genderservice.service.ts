import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { gender } from '../Models/Ui-Models/GenderUI';

@Injectable({
  providedIn: 'root'
})
export class GenderserviceService {

  private baseUrl='https://localhost:44391';

  constructor(private Httpclient:HttpClient) { }

  getGenderList():Observable<gender[]>
  {
    return this.Httpclient.get<gender[]>(this.baseUrl+'/Api/Genders');
  }
}
