import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import { CoursesRoutingModule } from './courses-routing.module';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormService } from './form/form.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';


@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    NgOptionHighlightModule
  ],
  providers:[
    FormService
  ]
})
export class CoursesModule { }
