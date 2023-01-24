import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {QuestionI} from "./interfaces/question";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  public questionLit$: BehaviorSubject<QuestionI[]> = new BehaviorSubject<
    QuestionI[]
    >(this.getQuestionFromLS());

  constructor() {
      this.questionLit$.subscribe((questions: QuestionI[]) => {
        localStorage.setItem('questionsList', JSON.stringify(questions));
      });
  }



   getQuestionFromLS(): QuestionI[] {
    return JSON.parse(localStorage.getItem('questionsList') || '[]');
  }
}
