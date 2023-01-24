import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {QuestionFormComponent} from "./question-form.component";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [QuestionFormComponent],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports: [QuestionFormComponent]
})
export class QuestionFormModule { }
