import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./questions/question-page.module').then(m => m.QuestionPageModule)
  },
  {
    path: 'edit-question/:questionId',
    loadChildren: () =>
      import('./edit-question/edit-question.module').then(
        (m) => m.EditQuestionModule
      ),
  },
  {
    path: 'create-question',
    loadChildren: () =>
      import('./create-question/create-question.module').then(
        (m) => m.CreateQuestionModule
      ),
  },
  {
    path: 'question-list',
    loadChildren: () =>
      import('./all-questions/all-questions.module').then(
        (m) => m.AllQuestionsModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
