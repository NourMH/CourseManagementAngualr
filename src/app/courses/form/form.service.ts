import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Courses, Staduims } from '../modal/courses';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {
 API = "https://localhost:7108/api/";
  constructor(private _HttpClient:HttpClient) {
   }
  getStaduims():Observable<Staduims>{
    return this._HttpClient.get<Staduims>(`${this.API}Staduims`)
  }
  addCourses(body:FormGroup):Observable<Courses>{
    return this._HttpClient.post<Courses>(`${this.API}Courses`,body)
  }

}
