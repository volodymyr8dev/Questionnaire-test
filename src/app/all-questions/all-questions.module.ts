import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AllQuestionsComponent} from "./all-questions.component";
import {AnsweredComponent} from "./answered/answered.component";
import {UnansweredComponent} from "./unanswered/unanswered.component";
import { QuestionnaireCardComponent } from './questionnaire-card/questionnaire-card.component';

const routes: Routes = [
  {
    path: '',
    component: AllQuestionsComponent,
  },
];

@NgModule({
  declarations: [AllQuestionsComponent, AnsweredComponent, UnansweredComponent, QuestionnaireCardComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class AllQuestionsModule { }
