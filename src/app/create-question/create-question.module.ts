import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateQuestionComponent} from "./create-question.component";
import {RouterModule, Routes} from "@angular/router";
import {QuestionFormModule} from "../question-form/question-form.module";

const routes: Routes = [
  {
    path: '',
    component: CreateQuestionComponent,
  },
];

@NgModule({
  declarations: [CreateQuestionComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes), QuestionFormModule
  ]
})
export class CreateQuestionModule { }
