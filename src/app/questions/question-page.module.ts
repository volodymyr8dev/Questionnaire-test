import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {QuestionComponent} from "../question/question.component";
import {QuestionsComponent} from "./questions.component";

const routes: Routes = [
  {
    path: '',
    component: QuestionsComponent,
  },
];


@NgModule({
  declarations: [QuestionsComponent, QuestionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ],
})
export class QuestionPageModule { }
