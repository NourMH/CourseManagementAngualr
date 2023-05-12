import { Component, ErrorHandler, OnInit } from '@angular/core';
import { FormService } from './form.service';
import { Courses, DataCourses, Staduims, StaduimsData } from '../modal/courses';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  listOfStaduims: Staduims = [];
  formAddCourses: FormGroup;
  doneMessage:string = '';
  errorMessge:string = '';
  DataCources:DataCourses[] = [];
  statusCourses!:Boolean;
  submit:Boolean = false;

  courseBranches:any[]=[
    {name:'branch1',id:1},
    {name:'branch2',id:2},
  ]
  genders:any[]=[
    {name:'male',id:0},
    {name:'female',id:1},
    {name:'both',id:2},
  ]
  academy:any[]=[
    {name:'acdemy1',id:0},
    {name:'acdemy2',id:1},
    {name:'acdemy3',id:2},
  ]
  days:any[]=[
    {name :'Sunday' ,id:0},
    {name :'Monday' ,id:1},
    {name :'Tuesday' ,id:2},
    {name :'Wednesday' ,id:3},
    {name :'Thursday' ,id:4},
    {name :'Friday' ,id:5},
    {name :'Saturday' ,id:6},
      

  ]
  constructor(
    private _FormService: FormService,
    private _FormBuilder: FormBuilder
  ) {
    this.formAddCourses = this.intilForm();
  }
  intilForm(): FormGroup {
    return this._FormBuilder.group({
      name: [null, [Validators.required]],
      countOfReservation: [null, [Validators.required]],
      duration: [null, [Validators.required]],
      ageFrom: [null, [Validators.required]],
      ageTo: [null, [Validators.required]],
      cost: [null, [Validators.required]],
      capacity: [null, [Validators.required]],
      startDate: [null, [Validators.required]],
      // status: [null, [Validators.required]],
      courseBranches: [[], [Validators.required]],
      gender: [null, [Validators.required]],
      academyId: [null, [Validators.required]],
      staduimId: [null, [Validators.required]],
      courseReservations: this._FormBuilder.array([this.initilFormCourseReservation()])
    })
  }
  get FormCourseReservation(){
    return this.formAddCourses.controls['courseReservations'] as FormArray ;
  }
  get form(){
    return this.formAddCourses.controls
  }
  initilFormCourseReservation():FormGroup{
    return this._FormBuilder.group({
      day:[null,[Validators.required]],
      time: [,[Validators.required]]
    })
  }
  addFormCourseReservation(){
    this.FormCourseReservation.push(this.initilFormCourseReservation())
  }
  removeFormCourseReservation(index:number){
    this.FormCourseReservation.removeAt(index)
  }
  ngOnInit(): void {
    this.getStadiem();

  }
  getStadiem() {
    this._FormService.getStaduims().subscribe({
      next: (res: Staduims) => {
        this.listOfStaduims = res;
      }, error: (err: any) => {
        console.log(err);
      }
    })
  }
  onSubmit() {
    console.log(this.formAddCourses);
    if(this.formAddCourses.invalid){
      return
    }
    this._FormService.addCourses(this.formAddCourses.value).subscribe({
      next: (res: Courses) => {
        this.submit = true;
        this.errorMessge = '';
        this.doneMessage = res.massage;
        this.DataCources = res.data;
        this.statusCourses = res.status;
      }, error: (err: any) => {
        this.doneMessage = '';
        this.errorMessge = err.error.message
        console.log(err);
      }
    })
  }
  close(){
    this.submit = false;
    this.DataCources=[];
    this.clear();
  }

  clear(){
    this.intilForm();
    }
  
}
