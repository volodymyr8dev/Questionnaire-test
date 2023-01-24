import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EditQuestionComponent} from "./edit-question.component";
import {RouterModule, Routes} from "@angular/router";
import {QuestionFormModule} from "../question-form/question-form.module";


const routes: Routes = [
  {
    path: '',
    component: EditQuestionComponent,
  },
];

@NgModule({
  declarations: [EditQuestionComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes), QuestionFormModule
  ]
})
export class EditQuestionModule { }
